import styled from "@emotion/styled";
import Scene from "../components/three-components/Scene";
import { colors } from "../styles/colors";
import fondo from '../assets/fondo.jpg'
import about from '../assets/about.jpg'

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap: 12px;
  padding: 20px 40px;
  color: ${colors.white};
  background-image: url(${fondo});
  background-size:cover;
  background-position: left top;
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
const About = styled.div`
  display:flex;
  padding: 20px 40px;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
  gap:20px;
`
const ImgAbout = styled.img`
  border-radius:50%;
  max-width:350px;
  height:350px;
`
const DivAbout = styled.div`
  max-width:500px;
`

export default function Home(){
  return(
    <>
      <Wrapper>
        {/* <Scene/> */}
        <p>Hello</p>
        <h1>I'M JESUS BARBOZA</h1>
        <Position>
          <p>a</p>
          <Job>&lt;&gt;Full Stack Developer&lt;/&gt;</Job>
        </Position>
        <button>Contact me</button>
        
      </Wrapper>
      <About>
        <DivAbout>
          <h1>About Me</h1>
          <h2>I am a Full Stack Developer</h2>
          <p>Apasionado por crear soluciones innovadoras y eficientes para problemas dentro de una empresa o negocio. Con más de 3 años de experiencia en diversos frameworks he adquirido habilidades para abordar cualquier desafío. Mi experiencia profesional me brinda una perspectiva única para entender procesos de negocio y proponer soluciones automatizadas que vayan acorde a sus objetivos.</p>
        </DivAbout>
        
        <ImgAbout src={about}/>
      </About>
      <h1>Recent Posts</h1>
      <h1>Skills</h1>
      <h1>What can I do?</h1>
      <h1>Redes</h1>
      <h1>Hobbies</h1>
      <p>Me encanta programar y siempre estoy buscando aprender algo nuevo.</p>
    </>
  )
}