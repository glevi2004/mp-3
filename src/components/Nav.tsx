import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: #898383;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 750px) {
    flex-direction: row;
    width: 100vw;
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  width: 100%;
  height: 100%;
  @media (max-width: 750px) {
    flex-direction: row;
    height: 5vh;
    margin: 2vh;
  }
`;

const StyledLi = styled.li`
  margin: 4vh auto;
  width: 70%;
`;

const StyledLink = styled(Link)`
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1); /* adds the subtle depth */
  padding: 2vh 2vw;
  font-size: calc(2px + 1.5vw);

  text-decoration: none; /* removes underline */
  text-align: center;

  color: #232121;
  display: block;

  &:hover {
    background: #bbb;
    transform: scale(1.05); /* enlarges item slightly */
    transition: all 0.3s ease-in-out; /* makes transiton smoother */
  }

  @media (max-width: 750px) {
    padding: 2vh;
    font-size: calc(2px + 2vw);
    margin: 0.5vw;
  }
`;

export default function Nav() {
  return (
    <>
      <StyledNav>
        <StyledUl>
          <StyledLi>
            <StyledLink to={"/"}>Home</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={"/about"}>About</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={"/education"}>Education</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={"/certifications"}>Certifications</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={"/work-experiences"}>Experience</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={"/projects"}>Projects</StyledLink>
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </>
  );
}
