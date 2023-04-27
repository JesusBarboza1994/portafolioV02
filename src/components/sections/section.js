import styled from "@emotion/styled"

const Title = styled.h1`
  width:100%;
  text-align:start;
`
const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  gap:20px;
  padding: 0px 20px;
  padding-left:20px;
`

export default function Section({title, Container}){
  return(
    <Wrapper>
      <Title>{title}</Title>
      <Container/>
    </Wrapper>
  )
}