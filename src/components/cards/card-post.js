import styled from "@emotion/styled"
import { useAuth } from "../../context/auth-context"
import { colors, ColorStyle } from "../../styles/colors"

const Wrapper = styled.div`
  width: 450px;
  max-width: 380px;
  max-height: 320px;
  background: ${props => ColorStyle(props.dark).backCard};
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content:flex-start;
  gap:8px;
  border-radius:20px;
  padding: 20px;
`
const Title = styled.h1`
  color:${colors.blue[100]};
  font-weight: 700;
  font-size: 28px;
`
const Date = styled.h1`
  color:${props => ColorStyle(props.dark).text};
  font-weight:400;
  font-size: 14px;
`
const Text = styled.div`
  color:${props => ColorStyle(props.dark).text};
  font-size:16px;
  font-weight: 400;
`
const Url = styled.a`
  text-decoration:none;
  color: ${colors.blue[100]};
`

export default function CardPost({date, title, text, url}){
  const {dark} = useAuth();
  return (
    <Wrapper dark={dark}>
      <Date dark={dark}>{date}</Date>
      <Title>{title}</Title>
      <Text dark={dark}>{text}</Text>
      <Url href={url}>READ MORE</Url>
    </Wrapper>
  )
}