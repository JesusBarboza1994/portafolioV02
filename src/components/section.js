import styled from "@emotion/styled"

const Title = styled.h1`

`
const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  gap:20px;
`

export default function Section({title, Container}){

  const Item = ()=>{
    return(
      <h1>hola amigos</h1>
    )
  }

  return(
    <Wrapper>
      <Title>{title}</Title>
      <Container/>
    </Wrapper>
  )
}