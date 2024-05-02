import styled from "styled-components";
import { PageProps } from "../interfacce/list-interface";

interface IconProps {
    $active: boolean;
}

const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 18px;
    padding-top: 12px;
    border-top: 3px solid #d9d9d9;
    font-weight: bold;
`;

const IconWrapper = styled.div<IconProps>`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 0px 10px;
    color: ${(props) => (props.$active ? "#ff005c" : "#000000")};
    svg {
        height: 24px;
        width: 24px;
        stroke: ${(props) => (props.$active ? "#ff005c" : "#000000")};
    }
`;

const TabBar: React.FC<PageProps> = ({ handleChangePage, page, totalPage }) => {
    // 다음 페이지 이동 함수
    const handleClickNext = (page: number) => {
        if (totalPage === page) return;
        else handleChangePage(page + 1);
    };

    // 이전 페이지 이동 함수
    const handleClickPrev = (page: number) => {
        if (page === 0) return;
        else handleChangePage(page - 1);
    };

    return (
        <Wrapper>
            <IconWrapper
                onClick={() => handleClickPrev(page)}
                $active={page !== 0 ? true : false}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                </svg>
                <div>이전</div>
            </IconWrapper>
            <IconWrapper
                $active={page !== 0 ? true : false}
                onClick={() => handleChangePage(0)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                </svg>
                <div>처음으로</div>
            </IconWrapper>
            <IconWrapper
                $active={totalPage !== page ? true : false}
                onClick={() => handleClickNext(page)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                </svg>
                <div>다음</div>
            </IconWrapper>
        </Wrapper>
    );
};

export default TabBar;
