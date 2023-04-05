import styled from "@emotion/styled"
import { colors } from "../../styles/colors";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  width:200px;
  background: ${colors.blue[100]};
  height: 36px;
  font-size: 16px;
  border-radius: 12px;
  padding:10px;
  color:${colors.white};
  display:flex;
  border:none;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  display:flex;
  gap:8px;
`

export const PresentationButton = () =>{
  const navigate = useNavigate()
  function handleContact(e){
    e.preventDefault();
    navigate('/contact')
  }
  return(
    <Button onClick={handleContact}>Contact me</Button>
  )
}