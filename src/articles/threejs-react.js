import styled from "@emotion/styled"
import { ColorStyle } from "../styles/colors"
import { useAuth } from "../context/auth-context"
import { articles } from "./articles"

const Wrapper = styled.div`
  min-height:800px;
  padding-top:50px;
`
const TextDate = styled.p`
  color: ${props => ColorStyle(props.dark).text};  
`
const DivDate = styled.div`
  width:100%;
  display:flex;
  justify-content:flex-end;
`

export const Article2 = ()=>{
  const { dark } = useAuth();
  return(
    <Wrapper>
      <DivDate style={{width:"100%"}}><TextDate dark={dark}>{articles[1].date.toDateString()}</TextDate></DivDate>
      <h1>{articles[1].title}</h1>
      <p>{articles[1].description}</p>
    </Wrapper>
  )
}