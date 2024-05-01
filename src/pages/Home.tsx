import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { ListProps } from "../interfacce/list-interface";
import { getCafeList } from "../apis/supabase-api";
import MapStore from "../stores/map-store";
import TabBar from "../components/tab-bar";
import List from "../components/list";
import SearchBox from "../components/search-box";
import KakaoMap from "../components/kakao-map";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const Container = styled.div`
    position: absolute;
    bottom: 0;
    z-index: 999;
    height: 40vh;
    width: 100%;
    background-color: #ffffff;
    border: none;
    border-radius: 20px 20px 0px 0px;
    padding: 4px 0px;
    @media (min-width: 1025px) {
        width: 380px;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 0;
    }
`;

const Box = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-bottom: 70px;
`;

const Line = styled.div`
    position: absolute;
    top: 1%;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    background-color: #696969;
    border-radius: 20px;
`;

const Search = styled.div`
    width: 100%;
    @media (max-width: 1024px) {
        display: none;
    }
`;

const Logo = styled.div`
    @media (max-width: 1024px) {
        display: none;
    }
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0px 20px;
    margin-top: 40px;
`;

const LogoTitle = styled.div`
    font-size: 1.6rem;
    font-weight: bold;
    color: #0a0b10;
`;

const Home = () => {
    const { setLocation, location, setSelected } = MapStore();
    const [currentPage, setCurrentPage] = useState(0);

    // 카페 데이터 패칭
    const {
        data: cafe_list,
        refetch: refetchCafeList,
        isLoading,
    } = useQuery({
        queryKey: ["cafe_list", location],
        queryFn: async () => getCafeList(location[0], location[1]),
    });

    // 페이지네이션 페이지 만들기 함수
    const paginateList = (list: ListProps[]) => {
        const pages = [];
        for (let i = 0; i < list.length; i += 5)
            pages.push(list.slice(i, i + 5));
        return pages;
    };

    // 페이지네이션 전체 페이지 갯수 구하는 함수
    const calculateTotalPages = (totalItems: number) => {
        const total = Math.ceil(totalItems / 5);
        if (total === 0) return total;
        else return total - 1;
    };

    // 페이지네이션 함수 호출
    const paginatedCafeList = cafe_list ? paginateList(cafe_list) : [];
    const totalPage = cafe_list ? calculateTotalPages(cafe_list.length) : 0;

    // 페이지 변경 함수
    const handleChangePage = (page: number) => {
        setCurrentPage(page);
        setSelected(["", "", 0, 0]);
    };

    // 현재 사용자 GPS 좌표 구하는 함수
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setLocation([latitude, longitude]);
        });
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // GPS 좌표가 바뀌면 카페 데이터 재 패칭
    useEffect(() => {
        if (location[0] && location[1]) {
            refetchCafeList();
            setCurrentPage(0);
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <Wrapper>
            <KakaoMap list={paginatedCafeList[currentPage]} />
            <Container>
                <Box>
                    <Line />
                    <Logo>
                        <div>
                            <img
                                className="logo"
                                alt="logo-icon"
                                src="/webp/logo.webp"
                                width="48"
                                height="48"
                            />
                        </div>
                        <LogoTitle>카페 찾는 부엉이</LogoTitle>
                    </Logo>
                    <Search>
                        <SearchBox />
                    </Search>
                    <List
                        list={paginatedCafeList[currentPage]}
                        isLoading={isLoading}
                    />
                    <TabBar
                        handleChangePage={handleChangePage}
                        page={currentPage}
                        totalPage={totalPage}
                    />
                </Box>
            </Container>
        </Wrapper>
    );
};

export default Home;
