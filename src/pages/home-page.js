import styled from "@emotion/styled";
import React, { useRef } from 'react';
import Scene from "../components/three-components/Scene";
import { colors, ColorStyle } from "../styles/colors";
import { Canvas } from "@react-three/fiber";
import { AboutWrapper } from "../components/sections/about-section";
import { StackSubDiv } from "../components/sections/stack-section";
import { ProjectsWrapper } from "../components/sections/project-section";
import CardPost from "../components/cards/card-post";
import ContactForm from "../components/contact-form";
import Section from "../components/sections/section";
import { useInView } from 'react-intersection-observer';
import { useAuth } from "../context/auth-context";
import { PostsWrapper } from "../components/sections/post-section";
import { Presentation } from "../components/sections/presentation-section";
import { Box } from "@react-three/drei";

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  gap:48px;
  padding-bottom:50px;
  position:relative;
`

export default function Home(){

  return(
    
    <Wrapper>
      {/* <Canvas>
        <Box/>
      </Canvas> */}
      
      <Presentation/>
      <AboutWrapper/>
      <Section title={"Stack"} Container={StackSubDiv}/>
      <Section title={"My Projects"} Container={ProjectsWrapper}/>
      <Section id={"contact"} title={"My Last Posts"} Container={PostsWrapper}/>  

    </Wrapper>
  )
}