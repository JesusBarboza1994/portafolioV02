import styled from "@emotion/styled"
import { useAuth } from "../../context/auth-context"
import { colors, ColorStyle } from "../../styles/colors"

const Button = styled.button`
  height:36px;
  background:none;
  border: 1px solid ${colors.blue[100]};
  color: ${props => ColorStyle(props.dark).text};
  padding: 8px 12px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:12px;
  font-size: 14px;
  width:120px;
  cursor:pointer;
`

export default function ButtonGithub({text, onClick}){
  const {dark} = useAuth();
  return(
    <Button onClick={onClick} dark={dark}>{text}</Button>
  )
}