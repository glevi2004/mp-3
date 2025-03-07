import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  align-text: center;
  background-color: rgb(245, 245, 245);

  @media (max-width: 750px) {
    width: 100vw;
  }
`;

export default PageContainer;
