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
                className="logo"
                alt="logo-icon"
                src="/webp/logo.webp"
                width="72"
                height="72"
            />
        </Wrapper>
    );
};

export default Loading;
