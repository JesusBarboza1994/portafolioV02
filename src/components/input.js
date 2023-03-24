import styled from "@emotion/styled"
import { colors } from "../styles/colors"

const InputStyle = styled.input`
  background:${colors.gray.medium};
  box-shadow: 0px 2px 8px ${colors.black};
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
  width:100%;
  min-height: 100px;
  padding: 2px 8px;
  color: ${colors.white};
`
const Label = styled.label`
  color:${colors.white};
  font-weight: 500;
  font-size: 20px;
`
const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  gap:6px;
`
export default function Input({label, placeholder, id, type}){
  return(
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      {type === "input" ?
        <InputStyle placeholder={placeholder} id={id}/>
      :
        <TextArea placeholder={placeholder}/>
      }
      
    </Wrapper>
  )
}