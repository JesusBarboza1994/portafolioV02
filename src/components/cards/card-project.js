import styled from "@emotion/styled"
import { colors, ColorStyle } from "../../styles/colors"
import ButtonGithub from "../buttons/view-github"
import ButtonLive from "../buttons/view-live"
import { useAuth } from "../../context/auth-context"

const Wrapper = styled.div`
  width: 310px;
  height: 380px;
  background: ${props => ColorStyle(props.dark).backCard};
  display: flex;
  align-items:center;
  justify-content:center;
  border-radius:12px;
  flex-direction:column;
  padding:20px;
  gap:20px;
  justify-content: space-between;
  // box-shadow: 0px 0px 3px 1px ${props => props.dark ? colors.white : colors.black};
`
const Img = styled.img`
  height: 150px;
  width: 100%;
  object-fit: fill;
  border-radius: 12px;
  border: 2px solid ${colors.blue[100]};
  opacity:0.7;
  margin-bottom:12px;
`
const DivText = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content: flex-start;
  gap: 12px;
  padding:0px 8px;
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
const DivButton = styled.div`
  width:100%;
  display:flex;
  justify-content: space-evenly;
`
const Description = styled.p`
  color:${props => ColorStyle(props.dark).text};
  font-size:14px;
`


export default function CardProject({image, text, url, desc, github}){
  const {dark} = useAuth()
  function handleGithub(){
    window.location.href = `${github}`
  }
  function handleLive(){
    window.location.href = `${url}`
  }

  return (
    
      <Wrapper dark={dark}>
        <div style={{width:"100%", height:"90%"}}>
          <Img src={image}/>
          <Url href={url} target="_blank" rel="noreferrer">
            <DivText>
              {/* <AiFillEye style={{scale:"1.5"}}/> */}
              <Text>{text}</Text>
              <Description dark={dark}>{desc}</Description>
            </DivText>
          </Url>
        </div>
        <div style={{width:"100%"}}>
          <DivButton>
            <ButtonLive text={"Live Demo"} onClick={handleLive}/>
            <ButtonGithub text={"Github Repo"} onClick={handleGithub}/>
          </DivButton>
        </div>
      </Wrapper>
    
  )
}