import styled from "@emotion/styled"
import { articles } from "./articles"
import { ColorStyle } from "../styles/colors"
import { useAuth } from "../context/auth-context"

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

export const Article1 = ()=>{
  const { dark } = useAuth();
  return(
    <Wrapper>
      <DivDate style={{width:"100%"}}><TextDate dark={dark}>{articles[0].date.toDateString()}</TextDate></DivDate>
      <h1>{articles[0].title}</h1>
      <p>{articles[0].description}</p>
    </Wrapper>
  )
}