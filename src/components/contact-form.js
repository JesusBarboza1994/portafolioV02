import styled from "@emotion/styled"
import { colors, ColorStyle } from "../styles/colors"
import contact from '../assets/contact.png'
import Input from "./input"
import {BsSend} from "react-icons/bs"
import { useAuth } from "../context/auth-context"
import { useState } from "react"

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
const DivForm = styled.form`
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
  @media(max-width:975px){
    // display:grid;
    // grid-template-rows: 1fr 1fr;
    // grid-template-columns: 1fr 1fr;
  }
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
  @media(max-width:975px){
    flex-direction:column-reverse;
    align-items:center;
  }
`
const Img = styled.img`
  max-height:400px;
  @media(max-width:975px){
    max-width:400px;
  }
`
const DivTitle = styled.div`
  display:flex;
  justify-content:center;
`
const Text = styled.p`
  padding:16px 0px;
  color:${props => ColorStyle(props.dark).text};
  text-align:justify;
`

export default function ContactForm(){
  const {dark} = useAuth();
  const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    Phone: "",
    Email: "",
    Message: ""
  })

  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value})
    console.log(form)
  }
  function handleTextArea(e){
    setForm({...form, Message: e.target.value})
    console.log(form)
  }

  function handleSubmit(e){
    e.preventDefault()
    const formEle = document.querySelector("form")
    console.log("Submitted")
    const formData = new FormData(formEle)
    fetch("https://script.google.com/macros/s/AKfycby2JYwHZ1vnaYFBk9QUeGJiVJIOV45DVOVux_VoOtU5CcWp-p9IsoBMDOHsFCSApI3o/exec",{
      method:"POST",
      body:formData
    })
    console.log(formData)
  }

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
        <DivForm onSubmit={handleSubmit}>
            
            <div style={{display:"flex", flexDirection:"column", gap:"16px"}}>
              <DivInput>
                <Input value={form.FirstName} onChange={handleChange} label={"First Name"} placeholder={"John "} id={"firstName"} type={"input"} name={"FirstName"}/>
                <Input value={form.LastName} onChange={handleChange} label={"Last Name"} placeholder={"Doe"} id={"lastName"} type={"input"} name={"LastName"}/>
                <Input value={form.Email} onChange={handleChange} label={"Email"} placeholder={"example@mail.com"} id={"email"} type={"input"} name={"Email"}/>
                <Input value={form.Phone} onChange={handleChange} label={"Phone"} placeholder={"987654321"} id={"phone"} type={"input"} name={"Phone"}/>
                <input value={form.Message} style={{display:"none"}}/>
              </DivInput>
              <Input value={form.Message} onChange={handleTextArea} label={"Message"} placeholder={"Type your message here..."} id={"text"} type={"textarea"} name={"Message"}/>
            </div>
            <Button>Send Message <BsSend/></Button>
        </DivForm>
      </SubDiv>
    </Wrapper>
  )
}