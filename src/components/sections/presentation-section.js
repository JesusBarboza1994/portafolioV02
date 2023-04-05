import styled from "@emotion/styled"
import { ColorStyle, colors } from "../../styles/colors"
import fondo from '../../assets/fondo.jpg'
import { useAuth } from "../../context/auth-context"
import { PresentationButton } from "../buttons/presentation-button"

const PresentationWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap: 12px;
  padding: 20px 40px;
  color: ${colors.white};
  background-image: url(${fondo});
  background-size:cover;
  background-position: ${props => props.dark ? "left bottom" : " top"};
}
`
const Position = styled.div`
  display:flex;
  flex-direction:row;
  gap:6px;
`
const Job = styled.div`
  color: ${colors.blue[100]};
  font-weight:800;
`

export const Presentation = ()=>{
  const {dark} = useAuth();
  return(
    <PresentationWrapper dark={dark}>
        {/* <Scene/> */}
        <p style={{color: ColorStyle(dark).text}}>Hello</p>
        <h1 style={{color: ColorStyle(dark).text}}>I'M JESUS BARBOZA</h1>
        <Position>
          <p style={{color: ColorStyle(dark).text}}>a</p>
          <Job>&lt;&gt;Full Stack Developer&lt;/&gt;</Job>
        </Position>
        <PresentationButton/>
        
    </PresentationWrapper>
  )
}