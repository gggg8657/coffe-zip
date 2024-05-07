import { RouterProvider, createBrowserRouter } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Suspense, lazy } from "react";
import Loading from "./components/loading";

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
  @font-face {
    font-family: 'Pretendard';
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff2")
      format("woff2");
    font-display: swap;
  }
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
    background-color: #ffffff;
`;

const App = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Wrapper>
                <GlobalStyles />
                <RouterProvider router={router} />
            </Wrapper>
        </Suspense>
    );
};

export default App;
