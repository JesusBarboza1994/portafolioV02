import styled from "@emotion/styled"
import { colors } from "../../styles/colors"

const Wrapper = styled.div`
  width:100%;
  background: ${colors.blue[100]};
  height: 36px;
  font-size: 16px;
  border-radius: 12px;
  padding:12px;
  color:${colors.white};
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
`

export default function ViewMoreButton(){
  return(
    <Wrapper>
      <p>View more</p>
    </Wrapper>
  )
}