import styled from "@emotion/styled"
import { colors, ColorStyle } from "../styles/colors"
import contact from '../assets/contact.png'
import Input from "./input"
import {BsSend} from "react-icons/bs"
import { useAuth } from "../context/auth-context"

const Wrapper = styled.div`
  width: 100%;
  min-height: 320px;
  background: ${props => ColorStyle(props.dark).backCard};
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  border-radius:20px;
  z-index:2;
  padding: 32px 32px;
`
const Title = styled.h1`
  color:${colors.blue[100]};
  font-weight: 700;
  font-size: 28px;
`
const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  gap:20px;
  align-items:center;
`
const DivInput = styled.div`
  display:flex;
  justify-content:space-between;
  gap:20px;
  flex-wrap:wrap;
`
const Button = styled.button`
  width:100%;
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
const SubDiv = styled.div`
  display:flex;
`
const Img = styled.img`
  max-height:400px;
`
const DivTitle = styled.div`
  display:flex;
  justify-content:center;
`
const Text = styled.p`
  padding:16px 0px;
  color:${props => ColorStyle(props.dark).text};
`

export default function ContactForm(){
  const {dark} = useAuth();
  return (
    <Wrapper dark={dark}>
      <div>
        <DivTitle>
          <Title>Contact me</Title>
        </DivTitle>
        <Text dark={dark}>Looking to expand your team? Or do you need a web developer for a specific project? If I can help you in any way don't hesitate to fill this form.</Text>
      </div>
      <SubDiv>
        <Img src={contact}/>
        <DivForm>
            
            <div style={{display:"flex", flexDirection:"column", gap:"16px"}}>
              <DivInput>
                <Input label={"First Name"} placeholder={"John "} id={"firstName"} type={"input"}/>
                <Input label={"Last Name"} placeholder={"Doe"} id={"lastName"} type={"input"}/>
                <Input label={"Email"} placeholder={"example@mail.com"} id={"email"} type={"input"}/>
                <Input label={"Phone"} placeholder={"987654321"} id={"phone"} type={"input"}/>
              </DivInput>
              <Input label={"Message"} placeholder={"Type your message here..."} id={"text"} type={"textarea"}/>
            </div>
            <Button>Send Message <BsSend/></Button>
        </DivForm>
      </SubDiv>
    </Wrapper>
  )
}