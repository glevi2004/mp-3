import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  padding: 4vh;
`;

const StyledP = styled.p`
  a {
    margin: 0 0.5vw;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledP>
        All Rights Reserved by Gabriel Levi Ramos
        <a href="https://www.linkedin.com/in/gabrielleviramos/" target="_blank">
          Credits
        </a>
        &copy;
      </StyledP>
    </StyledFooter>
  );
};

export default Footer;
