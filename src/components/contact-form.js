import styled from "@emotion/styled"
import { colors } from "../styles/colors"
import contact from '../assets/contact.png'
import Input from "./input"
import {BsSend} from "react-icons/bs"

const Wrapper = styled.div`
  width: 100%;
  min-height: 320px;
  background: ${colors.blue[200]};
  display: flex;
  justify-content:space-between;
  border-radius:20px;
  padding: 32px 32px;
`
const Title = styled.h1`
  color:${colors.blue[100]};
  font-weight: 700;
  font-size: 28px;
`
const Date = styled.h1`
  color:${colors.white};
  font-weight:300;
  font-size: 14px;
`
const Text = styled.div`
  color:${colors.white};
  font-size:16px;
  font-weight: 400;
`
const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  gap:20px;
  align-items:center;
`
const DivInput = styled.div`
  display:flex;
  gap: 40px;
`
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

export default function ContactForm(){
  return (
    <Wrapper>
     <img src={contact}/>
     <DivForm>
        <Title>Contact me</Title>
        <div style={{display:"flex", flexDirection:"column", gap:"16px"}}>
          <DivInput>
            <Input label={"Your name"} placeholder={"John Doe"} id={"name"} type={"input"}/>
            <Input label={"Your email"} placeholder={"example@mail.com"} id={"email"} type={"input"}/>
          </DivInput>
          <Input label={"Message"} placeholder={"Type your message here..."} id={"text"} type={"textarea"}/>
        </div>
        <Button>Send Message <BsSend/></Button>
     </DivForm>
    </Wrapper>
  )
}