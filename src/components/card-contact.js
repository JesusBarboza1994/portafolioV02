import styled from "@emotion/styled"
import { useAuth } from "../context/auth-context"
import { colors, ColorStyle } from "../styles/colors"

const Wrapper = styled.div`
  width: 230px;
  height: 140px;
  background: ${props => ColorStyle(props.dark).backCard};
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
  font-size:18px;

`

export default function CardContact({type, data, Item}){
  const {dark} = useAuth();
  return (
    <Wrapper dark={dark}>
      <Item style={{color: colors.blue[100],scale:"4.5"}}/>
      {/* <Title>{type}</Title> */}
      <Text style={{color: ColorStyle(dark).text}}>{data}</Text>
    </Wrapper>
  )
}