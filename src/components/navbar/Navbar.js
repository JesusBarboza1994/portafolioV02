import styled from "@emotion/styled";
import { Link  } from "react-router-dom";
import { colors, ColorStyle } from "../../styles/colors";
import {FaRegMoon} from "react-icons/fa"
import { useAuth } from "../../context/auth-context";
import { animateScroll as scroll } from 'react-scroll';
import * as Styled from "./styles";
export function Navbar(props){
  const {dark, setDark} = useAuth();

  function handleDarkMode(event){
    event.preventDefault();
    setDark(!dark);
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const urls = ["home", "articles", "portafolio", "contact"]
  return(
    <Styled.Nav dark={dark}>
      <div style={{display:"flex", gap:"8px", alignItems:"center"}}>
        <FaRegMoon/>
        <Styled.Rectangle onClick={handleDarkMode} dark={dark}>
          <Styled.Circle dark3={dark}/>
        </Styled.Rectangle>
      </div>
      <Styled.List>
        { urls.map((url, index)=>{
          if(url === "contact"){
            return(
              <Styled.Li>
                <Styled.StyledLinkButton dark={dark} to={`/contact`} key={index}>{capitalizeFirstLetter(url)}</Styled.StyledLinkButton>
              </Styled.Li>
            )
          }
          return(
            <Styled.Li>
              <Styled.StyledLink dark={dark} to={`/${url === "home" ? "" : url}`} key={'b'+index}>{capitalizeFirstLetter(url)}</Styled.StyledLink>
            </Styled.Li>
          )
          })
        }
      </Styled.List>
    </Styled.Nav>
  )
}