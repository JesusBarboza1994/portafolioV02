import git from '../../assets/git.png'
import figma from '../../assets/figma.png'
import javascript from '../../assets/javascript.png'
import mongodb from '../../assets/mongodb.png'
import node from '../../assets/node.png'
import postgre from '../../assets/postgre.png'
import python from '../../assets/python.png'
import react from '../../assets/react.png'
import ruby from '../../assets/ruby.png'
import vue from '../../assets/vue.png'
import CardStack from "../cards/card-stack";
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

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


export const StackSubDiv = ()=>{
  const backImages = [ruby, python, postgre, mongodb, node]
  const frontImages = [vue, react, figma, git, javascript]

  return(
    <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
      <FullStackDivRight style={{justifyContent:"flex-start"}} >
        {frontImages.map((image, index) =>{
            return <CardStack image={image} key={index}/>
          })}
      </FullStackDivRight>

      <FullStackDivLeft style={{justifyContent:"flex-end"}} >
          {backImages.map((image, index) =>{
            return <CardStack image={image} key={`a`+index}/>
          })}
      </FullStackDivLeft>
    </div>
  )
}