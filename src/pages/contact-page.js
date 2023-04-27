import styled from "@emotion/styled";
import ContactForm from "../components/contact-form";

const Wrapper = styled.div`
  padding: 20px;
  min-height: 900px;
  z-index:1;
  max-width: 1000px;
  margin:auto;
`

export default function Contact(){
  return(
    <Wrapper>
      <ContactForm/>
    </Wrapper>
  )
}