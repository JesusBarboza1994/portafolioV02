import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors } from "./styles/colors";
import {FaRegMoon} from "react-icons/fa"
import { useState } from "react";
import { useAuth } from "./context/auth-context";

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
  background-color:${colors.blue[200]};
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 0px 20px;
`
const Rectangle = styled.div`
  background: ${colors.black};
  border-radius: 4px;
  height:12px;
  width:42px;
  position:relative;
  display:flex;
  align-items:center;
`
const Circle = styled.div`
  background: ${colors.blue[100]};
  height:20px;
  width:20px;
  border-radius:50%;
  position:absolute;
  right: ${dark => null ? '100': "0"};
`

export function Navbar(){
  const {dark, setDark} = useAuth();

  function handleDarkMode(event){
    event.preventDefault();
    setDark(true);
  }

  
  return(
    <Nav>
      <div style={{display:"flex", gap:"8px", alignItems:"center"}}>
        <FaRegMoon/>
        <Rectangle onClick={handleDarkMode}>
          <Circle dark={dark}/>
        </Rectangle>
      </div>
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
  )
}