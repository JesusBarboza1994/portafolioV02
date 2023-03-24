import styled from "@emotion/styled"
import { useAuth } from "../context/auth-context"
import { colors, ColorStyle } from "../styles/colors"

const Wrapper = styled.div`
  width: 90px;
  height: 90px;
  background: ${props => ColorStyle(props.dark).backCard};
  display: flex;
  align-items:center;
  justify-content:center;
  border-radius:12px;
  padding:12px;
`


export default function CardStack({image}){
  const {dark} = useAuth();
  return (
    <Wrapper dark={dark}>
      <img style={{width:"100%"}} src={image} alt={"imagen"}/>
    </Wrapper>
  )
}