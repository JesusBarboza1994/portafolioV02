import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors, ColorStyle } from "./styles/colors";
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
  color: ${props => ColorStyle(props.dark).text};

  &:hover{
    color:${props => ColorStyle(props.dark).textHover};
    transform: translateY(10px);
  }
`

const Nav = styled.nav`
  background-color:${props => ColorStyle(props.dark).backCard};
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  padding: 0px 20px;
  position: sticky;
  top:0px;
`
const Rectangle = styled.div`
  background: ${props => ColorStyle(props.dark).switch};
  border-radius: 6px;
  height:12px;
  width:42px;
  position:relative;
  display:flex;
  align-items:center;
`
const Circle = styled.div`
  background: ${colors.blue[100]};
  height:24px;
  width:24px;
  border-radius:50%;
  position:absolute;
  right: ${props => props.dark ? '1': "0"};
  
`

export function Navbar(){
  const {dark, setDark} = useAuth();

  function handleDarkMode(event){
    event.preventDefault();
    setDark(!dark);
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  const urls = ["home", "articles", "portafolio", "contact", "about"]
  return(
    <Nav dark={dark}>
      <div style={{display:"flex", gap:"8px", alignItems:"center"}}>
        <FaRegMoon/>
        <Rectangle onClick={handleDarkMode} dark={dark}>
          <Circle dark={dark}/>
        </Rectangle>
      </div>
      <List>
        { urls.map(url=>{
          return(
            <Li>
              <StyledLink dark={dark} to={`/${url === "home" ? "" : url}`}>{capitalizeFirstLetter(url)}</StyledLink>
            </Li>
          )
          })
        }
      </List>
    </Nav>
  )
}