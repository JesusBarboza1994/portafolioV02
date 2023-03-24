import styled from "@emotion/styled"
import { useAuth } from "../context/auth-context"
import { colors, ColorStyle } from "../styles/colors"

const InputStyle = styled.input`
  background:${colors.gray.medium};
  box-shadow: 0px 2px 8px ${colors.black};
  opacity: ${props => props.dark ? "100%" : "100%"};
  border-radius: 12px;
  border:none;
  width:220px;
  height: 40px;
  padding: 2px 8px;
  color: ${colors.white};
  
`
const TextArea = styled.textarea`
  background:${colors.gray.medium};
  box-shadow: 0px 2px 8px ${colors.black};
  border-radius: 12px;
  border:none;
  opacity: ${props => props.dark ? "100%" : "100%"};
  width:100%;
  min-height: 100px;
  padding: 2px 8px;
  color: ${colors.white};
`
const Label = styled.label`
  color:${props => ColorStyle(props.dark).text};
  font-weight: 500;
  font-size: 20px;
`
const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  gap:6px;
`
export default function Input({label, placeholder, id, type}){
  const {dark} = useAuth()
  return(
    <Wrapper>
      <Label  dark={dark} htmlFor={id}>{label}</Label>
      {type === "input" ?
        <InputStyle placeholder={placeholder} id={id}/>
      :
        <TextArea dark={dark  } placeholder={placeholder}/>
      }
      
    </Wrapper>
  )
}