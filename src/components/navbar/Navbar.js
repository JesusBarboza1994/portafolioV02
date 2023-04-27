import styled from "@emotion/styled";
import { Link  } from "react-router-dom";
import { colors, ColorStyle } from "../../styles/colors";
import {FaRegMoon} from "react-icons/fa"
import {RxHamburgerMenu} from "react-icons/rx"
import { useAuth } from "../../context/auth-context";
import { useState } from "react";

const Li = styled.li`
  list-style:none;
  @media(max-width:975px){
    padding: 15px auto;
    width:100%;
    text-align:center;
    height:50px;
  }
`
const List = styled.ul`
  display:flex;
  justify-content: flex-end;
  align-items:center;
  gap: 40px;
  margin:0px;
  width:100%;
  padding: 20px 40px;
  @media(max-width:975px){  
    flex-direction:column;
    width:250px;
    display:${props => props.menu};
    position: absolute;
    right:0;
    top:60px;
    background:${props => ColorStyle(props.dark).backCard};
    padding: 0px 0px;
    align-items:center;
    gap:5px;
  }
`
const StyledLink = styled(Link)`
  text-decoration:none;
  color: ${props => ColorStyle(props.dark).text};
  &:hover{
    color:${props => ColorStyle(props.dark).textHover};
    transform: translateY(10px);
  }
`
const StyledLinkButton = styled(Link)`
  text-decoration:none;
  background:${props => ColorStyle(props.dark).buttonNav};
  padding: 6px 18px;
  border-radius:8px;
  color: ${props => ColorStyle(props.dark).text};
  &:hover{
    color:${props => ColorStyle(props.dark).textHover};
    transform: translateY(10px);
  }
`
const Nav = styled.nav`
  background-color:${props => ColorStyle(props.dark).backCard};
  display:flex;
  height: 60px;
  justify-content:space-between;
  align-items:center;
  width:100%;
  padding: 0px 20px;
  position: sticky;
  top:0px;
  z-index:1;
  @media (max-width: 975px) {
    position:relative;
  }
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
const Menu = styled(RxHamburgerMenu)`
  cursor:pointer;
  scale:1.5;
  display:none;
  @media(max-width:975px){
    display:block;
  }
`

export function Navbar(){
  const {dark, setDark} = useAuth();
  const [menu, setMenu] = useState("none");
  
  function handleMenu(){
    console.log("123")
    menu==="none" ? setMenu("flex") : setMenu("none");    
  }

  function handleCloseMenu(){
    setMenu("none");
  }

  function handleDarkMode(event){
    event.preventDefault();
    setDark(!dark);
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const urls = ["home", "articles", "portafolio", "contact"]
  return(
    <Nav dark={dark}>
      <div style={{display:"flex", gap:"8px", alignItems:"center"}}>
        <FaRegMoon/>
        <Rectangle onClick={handleDarkMode} dark={dark}>
          <Circle dark={dark}/>
        </Rectangle>
      </div>
      <List menu={menu} onClick={handleCloseMenu} dark={dark}>
        { urls.map((url, index)=>{
          if(url === "contact"){
            return(
              <Li>
                <StyledLinkButton dark={dark} to={`/contact`} key={index}>{capitalizeFirstLetter(url)}</StyledLinkButton>
              </Li>
            )
          }
          return(
            <Li>
              <StyledLink dark={dark} to={`/${url === "home" ? "" : url}`} key={'b'+index}>{capitalizeFirstLetter(url)}</StyledLink>
            </Li>
          )
          })
        }
      
      </List>
      <Menu onClick={handleMenu}/>
    </Nav>
  )
}