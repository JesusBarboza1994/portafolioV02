import styled from "@emotion/styled"
import { ColorStyle, colors } from "../../styles/colors"
import { Link } from "react-router-dom"

export const Li = styled.li`
  list-style:none;
`

export const List = styled.ul`
  display:flex;
  justify-content: flex-end;
  gap: 40px;
  margin:0px;
  width:100%;
  padding: 20px 40px;
`
export const StyledLink = styled(Link)`
  text-decoration:none;
  color: ${props => ColorStyle(props.dark).text};
  &:hover{
    color:${props => ColorStyle(props.dark).textHover};
    transform: translateY(10px);
  }
`
export const StyledLinkButton = styled(Link)`
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
export const Nav = styled.nav`
  background-color:${props => ColorStyle(props.dark).backCard};
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  padding: 0px 20px;
  position: sticky;
  top:0px;
  z-index:1;
`
export const Rectangle = styled.div`
  background: ${props => ColorStyle(props.dark).switch};
  border-radius: 6px;
  height:12px;
  width:42px;
  position:relative;
  display:flex;
  align-items:center;
`
export const Circle = styled.div`
  background: ${colors.blue[100]};
  height:24px;
  width:24px;
  border-radius:50%;
  position:absolute;
  right: ${props => props.dark ? '1': "0"};
`
