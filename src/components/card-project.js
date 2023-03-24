import styled from "@emotion/styled"
import { colors } from "../styles/colors"
import {AiFillEye} from "react-icons/ai"
import { Link } from "react-router-dom"

const Wrapper = styled.div`
  width: 450px;
  height: 300px;
  background: ${colors.blue[200]};
  display: flex;
  align-items:center;
  justify-content:center;
  border-radius:12px;
  flex-direction:column;
  justify-content: space-between;
`
const Img = styled.img`
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
`
const DivText = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content: flex-start;
  gap: 12px;
  padding:8px;
`
const Text = styled.h1`
  font-weight: 600;
  font-size: 24px;
`
const Url = styled.a`
  text-decoration:none;
  color:${colors.blue[100]};
  &:hover{
    color:${colors.white};
  }
`


export default function CardProject({image, text, url}){
  return (
    <Url href={url} target="_blank" rel="noreferrer">
    <Wrapper>
      <div style={{width:"100%", height:"90%"}}>
        <Img src={image}/>
      </div>
        <DivText>
        <AiFillEye style={{scale:"1.5"}}/>
        <Text>{text}</Text>
        </DivText>
    </Wrapper>
    </Url>
  )
}