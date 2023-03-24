import styled from "@emotion/styled"
import { colors } from "../../styles/colors"

const Button = styled.button`
  height:36px;
  background: ${colors.blue[100]};
  color: ${colors.white};
  padding: 8px 12px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:12px;
  font-size: 14px;
  width:120px;
  border:none;
`

export default function ButtonLive({text, onClick}){
  return(
    <Button onClick={onClick}>{text}</Button>
  )
}