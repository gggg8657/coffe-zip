import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { ListProps } from "../interfacce/list-interface";
import { getCafeList } from "../apis/supabase-api";
import Map from "../components/map";
import TabBar from "../components/tab-bar";
import MapStore from "../stores/map-store";
import List from "../components/list";
import SearchBox from "../components/search-box";

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
        width: 20%;
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

const Home = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const { setLocation, location } = MapStore();

    const { data: cafe_list, refetch: refetchCafeList } = useQuery({
        queryKey: ["cafe_list", location],
        queryFn: async () => getCafeList(location[0], location[1]),
    });

    const paginateList = (list: ListProps[]) => {
        const pages = [];
        for (let i = 0; i < list.length; i += 5)
            pages.push(list.slice(i, i + 5));
        return pages;
    };

    const calculateTotalPages = (totalItems: number) => {
        const total = Math.ceil(totalItems / 5);
        if (total === 0) return total;
        else return total - 1;
    };

    const paginatedCafeList = cafe_list ? paginateList(cafe_list) : [];
    const totalPage = cafe_list ? calculateTotalPages(cafe_list.length) : 0;

    const handleChangePage = (page: number) => setCurrentPage(page);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation([latitude, longitude]);
            }
            // (error) => {},
            // {
            //     enableHighAccuracy: true,
            // }
        );
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (location[0] && location[1]) {
            refetchCafeList();
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <Wrapper>
            <Map list={paginatedCafeList[currentPage]} />
            <Container>
                <Box>
                    <Line />
                    <Search>
                        <SearchBox />
                    </Search>
                    <List list={paginatedCafeList[currentPage]} />
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
