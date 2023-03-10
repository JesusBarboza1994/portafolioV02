import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors } from "./styles/colors";

const Li = styled.li`
  list-style:none;
`

const List = styled.ul`
  display:flex;
  justify-content: flex-end;
  gap: 40px;
  margin:0px;
  width:100%;
  padding: 20px 40px;
`
const StyledLink = styled(Link)`
  text-decoration:none;
  color: ${colors.white};

  &:hover{
    color:${colors.blue[100]};
    transform: translateY(10px);
  }
`

const Nav = styled.nav`
  background-color:${colors.background}
`

export const Navbar = () => (
  <Nav>
    <List>
      <Li>
        <StyledLink to="/">Home</StyledLink>
      </Li>
      <Li>
        <StyledLink to="/articles">Articles</StyledLink>
      </Li>
      <Li>
        <StyledLink to="/portafolio">Portafolio</StyledLink>
      </Li>
      <Li>
        <StyledLink to="/contact">Contact</StyledLink>
      </Li> 
      <Li>
        <StyledLink to="/about">About</StyledLink>
      </Li>
    </List>
  </Nav>
);