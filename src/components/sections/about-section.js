import styled from "@emotion/styled"
import about from "../../assets/about.jpg"
import { ColorStyle } from "../../styles/colors"
import { useAuth } from "../../context/auth-context"
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi"
import CardContact from "../cards/card-contact"

const Wrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  gap:40px;
  @media(max-width:975px){
    flex-direction:column-reverse;
  }
`
const ImgAbout = styled.img`
  border-radius:50%;
  max-width:350px;
  height:350px;
  margin-right:12px;
  padding: 20px 20px;
`
const DivAbout = styled.div`
  max-width:550px;
  display: flex;
  flex-direction:column;
  gap: 16px;
  padding: 0px 20px;
`
const DivCardsContact = styled.div`
  display:flex;
  justify-content: space-evenly;
  width:100%;
  flex-wrap:wrap;
  gap:20px;
`

export const AboutWrapper = () =>{
  const {dark} = useAuth();
  return(
    <Wrapper>
      <DivAbout>
          <h1>About Me</h1>
          <h2>I am a Full Stack Developer</h2>
          <p style={{color: ColorStyle(dark).text, textAlign:"justify"}}>Passionate about creating innovative and efficient solutions for problems within a company or business. With more than 3 years of experience in various frameworks I have acquired the skills to tackle any challenge. My professional experience gives me a unique perspective to understand business processes and propose automated solutions that are consistent with their objectives.</p>
          <DivCardsContact>
            <CardContact type="Phone" data="+51 977354389" Item={HiOutlinePhone}/>
            <CardContact type="Email" data="jbarz20@gmail.com" Item={HiOutlineMail}/>
          </DivCardsContact>
        </DivAbout>
        
      <ImgAbout src={about}/>
    </Wrapper>
  )
}
