import styled from "@emotion/styled";
import React, { useRef } from 'react';
import Scene from "../components/three-components/Scene";
import { colors, ColorStyle } from "../styles/colors";
import fondo from '../assets/fondo.jpg'
import about from '../assets/about.jpg'
import git from '../assets/git.png'
import figma from '../assets/figma.png'
import javascript from '../assets/javascript.png'
import mongodb from '../assets/mongodb.png'
import node from '../assets/node.png'
import postgre from '../assets/postgre.png'
import python from '../assets/python.png'
import react from '../assets/react.png'
import ruby from '../assets/ruby.png'
import vue from '../assets/vue.png'
import CardContact from "../components/card-contact";
import {HiOutlinePhone, HiOutlineMail} from "react-icons/hi"
import CardStack from "../components/card-stack";
import CardProject from "../components/card-project";
import getahome from '../assets/getahome.png'
import keepable from '../assets/keepable.png'
import CardPost from "../components/card-post";
import ContactForm from "../components/contact-form";
import Section from "../components/section";
import { keyframes } from "@emotion/react";
import { useInView } from 'react-intersection-observer';
import { useAuth } from "../context/auth-context";
import Footer from "../components/footer";

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  gap:48px;
  padding-bottom:50px;
`
const PresentationWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap: 12px;
  padding: 20px 40px;
  color: ${colors.white};
  background-image: url(${fondo});
  background-size:cover;
  background-position: ${props => props.dark ? "left bottom" : "center top"};
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
const AboutWrapper = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
  gap:20px;
`
const ImgAbout = styled.img`
  border-radius:50%;
  max-width:370px;
  height:350px;
  margin-right:12px;
`
const DivAbout = styled.div`
  max-width:550px;
  display: flex;
  flex-direction:column;
  gap: 16px;
`
const bounceRight = keyframes`
  from, 0% to {
    transform: translate3d(0,0,0);
  }
  100% {
    transform: translate3d(${window.innerWidth/5  }px,0,0);
  }
`
const bounceLeft = keyframes`
  from, 0% to {
    transform: translate3d(0,0,0);
  }
  100% {
    transform: translate3d(-300px,0,0);
  }
`
const FullStackDivRight = styled.div`
  height:90px;
  width: 100%;
  display:flex;
  gap:16px;
  &:hover{
    animation: ${bounceRight} 2s forwards 1;
  }
`
const FullStackDivLeft = styled.div`
  height:90px;
  width: 100%;
  display:flex;
  gap:16px;
  &:hover{
    animation: ${bounceLeft} 2s forwards 1;
  }
`
const DivCardsContact = styled.div`
  display:flex;
  gap:12px;
  width:100%;
`
const DivCardsProject = styled.div`
  display:flex;
  justify-content: space-between;
  flex-wrap:wrap;
  gap:24px;

`
const DivCardsPost = styled.div`
  display:flex;
  flex-wrap:wrap;
  width:100%;
  justify-content: space-between;
`
const Button = styled.button`
  width:200px;
  background: ${colors.blue[100]};
  height: 36px;
  font-size: 16px;
  border-radius: 12px;
  padding:10px;
  color:${props => ColorStyle(props.dark).text};
  display:flex;
  border:none;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  display:flex;
  gap:8px;
`


export default function Home(){
  const backImages = [ruby, python, postgre, mongodb, node]
  const frontImages = [vue, react, figma, git, javascript]
  const {dark} = useAuth();
  
  const ref = useRef(null);
  const { inView, ref: inViewRef } = useInView({
    threshold: 0.5, // se activará la animación cuando el 50% del elemento sea visible en la pantalla
    triggerOnce: true // la animación solo se activa una vez
  });

  const StackSubDiv = ()=>{
    return(
      <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
        <FullStackDivRight style={{justifyContent:"flex-start"}} >
          {frontImages.map((image, index) =>{
              return <CardStack image={image} key={index}/>
            })}
        </FullStackDivRight>

        <FullStackDivLeft style={{justifyContent:"flex-end"}} >
            {backImages.map(image =>{
              return <CardStack image={image}/>
            })}
        </FullStackDivLeft>
      </div>
    )
  }
  const ProjectsWrapper = () =>{
    return(
      <>
        <DivCardsProject>
          <CardProject image={getahome} github={"https://github.com/JesusBarboza1994/getahome_frontend"} desc={"Web App to view, rent or sale houses and departments."} text={"Get a home"} url={"https://fanciful-praline-7ff529.netlify.app/"}/>
          <CardProject image={keepable} github={"https://github.com/JesusBarboza1994/Keepable"} desc={"Write your notes in the post-it's so you can remind any task."}text={"Keepable"} url={"https://keepable-jb.netlify.app/"}/>
          <CardProject image={getahome} desc={"Web App to view, rent or sale houses and departments."} text={"Get a home"} url={"https://fanciful-praline-7ff529.netlify.app/"}/>
        </DivCardsProject>
        {/* <ViewMoreButton/> */}
      </>
    )
  }  
  const PostsWrapper = () =>{
    return(
      <DivCardsPost>
        <CardPost date={"16 January, 2023"} title={"Titulo 1"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper cursus at viverra netus mauris, fermentum felis. Amet purus viverra urna, purus, quam vestibulum dignissim etiam eu. Enim, facilisi donec est sollicitudin vulputate."}/>
        <CardPost date={"16 January, 2023"} title={"Titulo 1"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper cursus at viverra netus mauris, fermentum felis. Amet purus viverra urna, purus, quam vestibulum dignissim etiam eu. Enim, facilisi donec est sollicitudin vulputate."}/>
      </DivCardsPost>
    )
  }  
  const AboutWrapper2 = () =>{
    return(
      <AboutWrapper>
        <DivAbout>
            <h1>About Me</h1>
            <h2>I am a Full Stack Developer</h2>
            <p style={{color: ColorStyle(dark).text}}>Apasionado por crear soluciones innovadoras y eficientes para problemas dentro de una empresa o negocio. Con más de 3 años de experiencia en diversos frameworks he adquirido habilidades para abordar cualquier desafío. Mi experiencia profesional me brinda una perspectiva única para entender procesos de negocio y proponer soluciones automatizadas que vayan acorde a sus objetivos.</p>
            <DivCardsContact>
              <CardContact type="Phone" data="+51 977354389" Item={HiOutlinePhone}/>
              <CardContact type="Email" data="jbarz20@gmail.com" Item={HiOutlineMail}/>
            </DivCardsContact>
          </DivAbout>
          
        <ImgAbout src={about}/>
      </AboutWrapper>
    )
  }


  return(
    <Wrapper>
      <PresentationWrapper dark={dark}>
        {/* <Scene/> */}
        <p style={{color: ColorStyle(dark).text}}>Hello</p>
        <h1 style={{color: ColorStyle(dark).text}}>I'M JESUS BARBOZA</h1>
        <Position>
          <p style={{color: ColorStyle(dark).text}}>a</p>
          <Job>&lt;&gt;Full Stack Developer&lt;/&gt;</Job>
        </Position>
        <Button dark={dark}>Contact me</Button>
        
      </PresentationWrapper>
      <AboutWrapper2/>
      <Section title={"Stack"} Container={StackSubDiv}/>
      <Section title={"My Projects"} Container={ProjectsWrapper}/>
      <Section title={"My Last Posts"} Container={PostsWrapper}/>
      <ContactForm/>     
   
      {/* <h1>What can I do?</h1>
      <h1>Redes</h1>
      <h1>Hobbies</h1> */}
    </Wrapper>
  )
}