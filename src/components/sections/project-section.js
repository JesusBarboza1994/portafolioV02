import CardProject from "../cards/card-project";
import getahome from '../../assets/getahome.png'
import keepable from '../../assets/keepable.png'
import eatable from '../../assets/eatable.png'
import styled from "@emotion/styled";

const DivCardsProject = styled.div`
  display:flex;
  // justify-content: space-evenly;
  flex-wrap:wrap;
  gap:16px;
  @media(max-width:975px){
    justify-content:center;
  }
`

export const ProjectsWrapper = () =>{
  return(
    <>
      <DivCardsProject>
        <CardProject image={getahome} github={"https://github.com/JesusBarboza1994/getahome_frontend"} desc={"Web App to view, rent or sale houses and departments."} text={"Get a home"} url={"https://fanciful-praline-7ff529.netlify.app/"}/>
        <CardProject image={keepable} github={"https://github.com/JesusBarboza1994/Keepable"} desc={"Write your notes in the post-it's so you can remind any task."}text={"Keepable"} url={"https://keepable-jb.netlify.app/"}/>
        <CardProject image={eatable} github={"https://github.com/JesusBarboza1994/Eatable-JesusBarboza"} desc={"Want to order any food? With this app you have the entire purchase process"}text={"Eatable"} url={"https://eatable-jb.netlify.app/"}/>
        {/* <CardProject image={getahome} desc={"Web App to view, rent or sale houses and departments."} text={"Get a home"} url={"https://fanciful-praline-7ff529.netlify.app/"}/> */}
      </DivCardsProject>
      {/* <ViewMoreButton/> */}
    </>
  )
}  