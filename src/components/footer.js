import styled from "@emotion/styled"
import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from "react-icons/ai"
import { useAuth } from "../context/auth-context"
import { colors, ColorStyle } from "../styles/colors"

const Wrapper = styled.div`
  display:flex;
  justify-content: space-between;
  border-top: 2px solid ${colors.black};
  padding: 10px 20px 0px 20px;
  position:sticky;
  bottom:0px;
  background: ${props => ColorStyle(props.dark).mainBackground};
`
const DivIcons = styled.div`
  display:flex;
  gap:20px;
  color: ${colors.gray.light}
`
const Url = styled.a`
  text-decoration:none;
  color: ${colors.gray.light};
`

export default function Footer(){
  const{dark} = useAuth()
  return(
    <Wrapper dark={dark}>
      <p>design by @jbarz20 </p>
      <DivIcons>
        <Url href="https://github.com/JesusBarboza1994">
          <AiFillGithub style={{scale:"1.5"}}/>
        </Url>
        <Url href="https://www.linkedin.com/in/jesus-barboza/">
          <AiFillLinkedin style={{scale:"1.5"}}/>
        </Url>
        <Url href="https://instagram.com/jesusbarboza2007?igshid=ZDdkNTZiNTM=">
          <AiFillInstagram style={{scale:"1.5"}}/>
        </Url>

      </DivIcons>
    </Wrapper>
  )
}