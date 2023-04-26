import styled from "@emotion/styled";
import ContactForm from "../components/contact-form";

const Wrapper = styled.div`
  padding: 20px;
  min-height: 800px;
  z-index:1;
`

export default function Contact(){
  return(
    <Wrapper>
      <ContactForm/>
    </Wrapper>
  )
}