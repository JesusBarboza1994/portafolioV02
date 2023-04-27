import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { useAuth } from "../context/auth-context"
import { colors, ColorStyle } from "../styles/colors"
import { articles } from "../articles/articles"

const Wrapper = styled.div`
  min-height: 1000px;
  // padding-top: 20px;
  display:flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1000px;
  margin:auto;
  padding: 20px 20px 0px 20px;
`
const Article = styled.div`
  // max-width: 380px;
`
const ListArticles = styled.div`
  width:100%;
  padding-left: 36px;
  display:flex;
  flex-direction: column;
  gap: 12px;
`
const Url = styled(Link)`
  text-decoration: none;
  color: ${props => ColorStyle(props.dark).mainText};
  &:hover{
    color:${props => ColorStyle(props.dark).text};
  }
`
const TextDate = styled.p`
  color: ${props => ColorStyle(props.dark).text};  
`
const SubTitle = styled.h2`
  padding-left: 8px;
  border-left: 3px solid ${props => ColorStyle(props.dark).mainText};
`
const H1 = styled.h1`

`

export default function Articles(){
  const { dark } = useAuth();
  
  return(
    <Wrapper>
      <h1>Articles</h1>
      <SubTitle dark={dark}>List of articles</SubTitle>
      <ListArticles>
        {
          articles.map((article, index) =>{
            return (
              <Url to={"/articles/"+article.url} dark={dark}>               
                <Article key={index}> 
                  <TextDate dark={dark}>{article.date.toDateString()}</TextDate>
                  <h1>{article.title}</h1>
                  <p>{article.description}</p>
                </Article>
              </Url>
            )
          })
        }
      </ListArticles>
    </Wrapper>
  )
}