import styled from "@emotion/styled"
import { colors } from "../styles/colors"

const Wrapper = styled.div`
  width: 450px;
  max-height: 320px;
  background: ${colors.blue[200]};
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content:center;
  gap:8px;
  border-radius:20px;
  padding: 8px 16px;
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
const Url = styled.a`
  text-decoration:none;
  color: ${colors.blue[100]};
`

export default function CardPost({date, title, text}){
  return (
    <Wrapper>
      <Date>{date}</Date>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Url href="#">READ MORE</Url>
    </Wrapper>
  )
}