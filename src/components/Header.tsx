import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: black;
  color: #f5f5f5;
  padding: 1vh 1vw;
  height: 13vh;
  display: flex;
  flex-direction: row;
  text-align: center;

  @media (max-width: 750px) {
    justify-content: center;
  }
`;

const Name = styled.h1`
  margin: 0.5vh;
`;

const Title = styled.p`
  margin: 0.5vh;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Header() {
  return (
    <>
      <StyledHeader>
        <Box>
          <Name>Gabriel Levi Ramos</Name>
          <Title>My Online Resume</Title>
        </Box>
      </StyledHeader>
    </>
  );
}
