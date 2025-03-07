import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const PageWrapper = styled.main`
  width: 70vw;
  margin: 0 auto;

  /* Base font sizes*/

  h1 {
    font-size: calc(24px + 1vw);
  }

  h2 {
    font-size: calc(20px + 0.8vw);
  }

  h3 {
    font-size: calc(18px + 0.6vw);
  }

  p,
  span,
  div {
    font-size: calc(16px + 0.4vw);
  }

  @media (max-width: 1000px) {
    width: 100vw;

    /* font sizes for mobile */
    h1 {
      font-size: calc(20px + 1vw);
    }

    h2 {
      font-size: calc(18px + 0.8vw);
    }

    h3 {
      font-size: calc(16px + 0.6vw);
    }

    p,
    span,
    div {
      font-size: calc(14px + 0.4vw);
    }
  }
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <PageWrapper>
      <App />
    </PageWrapper>
  </StrictMode>
);
