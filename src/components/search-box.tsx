import { useEffect, useState } from "react";
import styled from "styled-components";
import MapStore from "../stores/map-store";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    img {
        &.search {
            cursor: pointer;
            position: absolute;
            right: 40px;
            top: 44px;
        }
        &.cancle {
            cursor: pointer;
            position: absolute;
            right: 68px;
            top: 44px;
        }
    }
`;

const Input = styled.input`
    font-size: 1rem;
    font-family: "Pretendard", "Noto Sans KR", sans-serif;
    background-color: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    margin: 0px 20px;
    margin-top: 30px;
    padding: 15px 24px;
    width: 100%;
    outline: none;
    border-radius: 50px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
`;

const SearchList = styled.div`
    width: 90%;
    max-height: 250px;
    overflow-y: scroll;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
`;

const SearchItem = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    color: #000000;
    border-bottom: 2px solid #f0f0f0;
`;

const SearchBox = () => {
    const { setLocation, setSelected } = MapStore();
    const [keyword, setKeyword] = useState("");
    const [placeList, setPlaceList] = useState<
        kakao.maps.services.PlacesSearchResultItem[]
    >([]);
    const [open, setOpen] = useState(false);

    // 카카오 지도 검색 기능 함수
    const handleSearch = async (key: string) => {
        if (key === "") {
            setPlaceList([]);
            setOpen(false);
            return;
        }
        const ps = new kakao.maps.services.Places();
        const placesSearchCB = (
            data: kakao.maps.services.PlacesSearchResultItem[],
            status: kakao.maps.services.Status
        ) => {
            if (status === kakao.maps.services.Status.OK) {
                setPlaceList(data);
            } else return;
        };
        ps.keywordSearch(key, placesSearchCB);
    };

    // 검색어 바뀔 때 마다 바로 검색하는 함수
    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
        handleSearch(e.target.value);
        setOpen(true);
    };

    // 장소 리스트 선택 시 좌표 설정 및 이동 함수
    const onClickPlace = async (lat: string, lng: string, name: string) => {
        setLocation([parseFloat(lat), parseFloat(lng)]);
        setSelected(["", "", 0, 0]);
        setKeyword(name);
        setOpen(false);
    };

    // 검색어 한번에 지우는 함수
    const onClickCancle = () => {
        setKeyword("");
        setOpen(false);
    };

    // 현재 마우스 이벤트를 감지하여 리스트 창을 닫을지 결정하는 함수
    const handleClickSearchBox = (e: MouseEvent) => {
        const isFocus = (e.target as HTMLElement).closest("div")?.dataset.id;
        isFocus ? setOpen(true) : setOpen(false);
    };

    // 클릭 이벤트 리스너 등록을 통한 마우스 이벤트 감지
    useEffect(() => {
        window.addEventListener("click", handleClickSearchBox);
        return () => {
            window.removeEventListener("click", handleClickSearchBox);
        };
    }, []);

    return (
        <Wrapper>
            <InputWrapper>
                <Input
                    onChange={onChange}
                    placeholder="장소나 주소를 검색해보세요"
                    type="text"
                    value={keyword}
                />
                <img
                    className="search"
                    alt="search-icon"
                    src="/svg/search.svg"
                    height="20"
                    width="auto"
                />
                {keyword !== "" && (
                    <img
                        className="cancle"
                        alt="cancle-icon"
                        src="/svg/cancle.svg"
                        height="20"
                        width="auto"
                        onClick={onClickCancle}
                    />
                )}
            </InputWrapper>
            <SearchList>
                {open &&
                    placeList.map((place, index) => (
                        <SearchItem
                            key={index}
                            onClick={() =>
                                onClickPlace(place.y, place.x, place.place_name)
                            }
                        >
                            <div>{place.place_name}</div>
                            <img
                                alt="arrow-icon"
                                src="/svg/arrow.svg"
                                height="20"
                                width="auto"
                            />
                        </SearchItem>
                    ))}
            </SearchList>
        </Wrapper>
    );
};

export default SearchBox;
