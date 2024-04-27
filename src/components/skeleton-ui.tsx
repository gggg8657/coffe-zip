import styled, { keyframes } from "styled-components";

const animation = keyframes`
    0% {
        background-position: 100% 0%;
    }
    100% {
        background-position: 0% 0%;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    background: linear-gradient(90deg, #cccccc, #f0f0f0);
    height: 28px;
    border-radius: 4px;
    background-size: 300% auto;
    animation: ${animation} 2s infinite linear;
`;

const SkeletonUI = () => {
    return Array.from({ length: 5 }, (_, index) => <Wrapper key={index} />);
};

export default SkeletonUI;
