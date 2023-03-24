import styled from "@emotion/styled"
import { colors } from "../styles/colors"

const Wrapper = styled.div`
  width: 230px;
  height: 140px;
  background: ${colors.blue[200]};
  padding: 40px 0px 15px 0px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-between;
  gap:30px;
  border-radius:20px;
`
const Text = styled.div`
  color:${colors.white};

`

export default function CardContact({type, data, Item}){
  return (
    <Wrapper>
      <Item style={{color: colors.blue[100],scale:"4.5"}}/>
      {/* <Title>{type}</Title> */}
      <Text>{data}</Text>
    </Wrapper>
  )
}