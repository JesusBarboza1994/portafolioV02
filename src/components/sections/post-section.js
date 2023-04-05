import styled from "@emotion/styled"
import CardPost from "../cards/card-post"
import { articles } from "../../articles/articles"

const DivCardsPost = styled.div`
  display:flex;
  flex-wrap:wrap;
  width:100%;
  justify-content: space-between;
`

export const PostsWrapper = () =>{
  return(
    <DivCardsPost>
      {articles.map(article =>{
        return(
          <CardPost 
            date={article.date.toDateString()} 
            title={article.title} 
            text={article.description} 
            url={'articles/'+article.url}
          />    
        )})
      }
    </DivCardsPost>
  )
}  