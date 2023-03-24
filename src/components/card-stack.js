import styled from "@emotion/styled"
import { colors } from "../styles/colors"

const Wrapper = styled.div`
  width: 90px;
  height: 90px;
  background: ${colors.blue[200]};
  display: flex;
  align-items:center;
  justify-content:center;
  border-radius:12px;
  padding:12px;
`


export default function CardStack({image}){
  return (
    <Wrapper>
      <img style={{width:"100%"}} src={image} alt={"imagen"}/>
    </Wrapper>
  )
}