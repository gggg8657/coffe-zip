import styled from "styled-components";
import { PageProps } from "../interfacce/list-interface";

const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
    border-top: 3px solid #d9d9d9;
`;

const IconWrapper = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 0px 10px;
`;

const TabBar: React.FC<PageProps> = ({ handleChangePage, page, totalPage }) => {
    const handleClickNext = (page: number) => {
        if (totalPage === page) return;
        else handleChangePage(page + 1);
    };

    const handleClickPrev = (page: number) => {
        if (page === 0) return;
        else handleChangePage(page - 1);
    };

    return (
        <Wrapper>
            <IconWrapper onClick={() => handleClickPrev(page)}>
                <img
                    alt="left-icon"
                    src="/svg/left.svg"
                    height="20"
                    width="20"
                />
                <div>이전</div>
            </IconWrapper>
            <IconWrapper onClick={() => handleChangePage(0)}>
                <img
                    alt="home-icon"
                    src="/svg/home.svg"
                    height="20"
                    width="20"
                />
                <div>처음으로</div>
            </IconWrapper>
            <IconWrapper onClick={() => handleClickNext(page)}>
                <img
                    alt="right-icon"
                    src="/svg/right.svg"
                    height="20"
                    width="20"
                />
                <div>다음</div>
            </IconWrapper>
        </Wrapper>
    );
};

export default TabBar;
