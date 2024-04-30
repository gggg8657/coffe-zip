import { RouterProvider, createBrowserRouter } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));

// React 페이지 라우터
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);

// 페이지 전체 공통 CSS
const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #f2f2f2;
    font-family: 'Pretendard';
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #B0B0B0;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 173, 181, 0.1);
  }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`;

const App = () => {
    return (
        <Wrapper>
            <GlobalStyles />
            <RouterProvider router={router} />
        </Wrapper>
    );
};

export default App;
