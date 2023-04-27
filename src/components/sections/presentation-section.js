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
  width:100%;
  height:300px;
  background-size:cover;
  background-position: ${props => props.dark ? "left bottom" : " top"};
}
`
const Position = styled.div`
  display:flex;
  flex-direction:row;
  gap:6px;
  font-size: 24px;
  justify-content:center;
`
const Job = styled.div`
  color: ${colors.blue[100]};
  font-weight:800;
  font-size: 20px;
  text-align:center;
`
const H1 = styled.h1`
  color:${colors.white};
  text-align:center;
  font-size:48px;
  line-height: 100%;
`
const P = styled.p`
  font-size: 24px;
`

export const Presentation = ()=>{
  const {dark} = useAuth();
  return(
    <PresentationWrapper dark={dark}>
        {/* <Scene/> */}
        <P style={{color: ColorStyle(dark).text}}>Hello</P>
        <H1>I'M JESUS BARBOZA</H1>
        <Position>
          <p style={{color: ColorStyle(dark).text}}>a</p>
          <Job>&lt;&gt;Full Stack Developer&lt;/&gt;</Job>
        </Position>
        <PresentationButton/>
        
    </PresentationWrapper>
  )
}