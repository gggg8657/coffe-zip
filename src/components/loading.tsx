import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Loading = () => {
    return (
        <Wrapper>
            <img
                alt="loading-icon"
                src="/webp/loading.webp"
                width="128"
                height="128"
            />
        </Wrapper>
    );
};

export default Loading;
