import { useState } from "react";
import styled from "styled-components";
import MapStore from "../stores/map-store";

const SearchForm = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    img {
        &.search {
            cursor: pointer;
            position: absolute;
            right: 36px;
        }
        &.cancle {
            cursor: pointer;
            position: absolute;
            right: 64px;
        }
    }
`;

const Input = styled.input`
    cursor: pointer;
    font-size: 1rem;
    font-family: "Pretendard";
    background-color: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    margin: 30px 20px;
    padding: 15px 24px;
    width: 100%;
    outline: none;
    border-radius: 50px;
`;

const SearchBox = () => {
    const { setLocation } = MapStore();
    const [keyword, setKeyword] = useState("");
    const handleSearch = (key: string) => {
        const ps = new kakao.maps.services.Places();
        const placesSearchCB = (
            data: kakao.maps.services.PlacesSearchResult,
            status: kakao.maps.services.Status
        ) => {
            if (status === kakao.maps.services.Status.OK) {
                setLocation([parseFloat(data[0].y), parseFloat(data[0].x)]);
            }
        };
        ps.keywordSearch(key, placesSearchCB);
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (keyword === "") return;
        handleSearch(keyword);
    };
    const onClickIcon = () => {
        if (keyword === "") return;
        handleSearch(keyword);
    };
    const onClickCancle = () => {
        setKeyword("");
    };
    return (
        <SearchForm onSubmit={handleSubmit}>
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
                onClick={onClickIcon}
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
        </SearchForm>
    );
};

export default SearchBox;
