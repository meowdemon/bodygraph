import Gate from 'components/Gate'
import { useAppSelector } from 'hooks/redux'
import { BG_COLOR } from 'models/const'
import { Centers } from 'models/types'
import styled from 'styled-components'

const Square = styled.div`
  width: 110px;
  height: 110px;
  background-color: ${BG_COLOR};
  position: relative;
  transform: rotate(45deg);
  position: absolute;
  left: calc(50% - 30px);
  top: 365px;
`

const SquareInner = styled.div`
transform: rotate(-45deg);
  position: relative; 
`

const G = () => {
  const { list: g } = useAppSelector((state) => state.gates)
  const gates = g.filter((gate) => gate.center === Centers.G)
  
  return (
    <Square>
      <SquareInner>
        {gates.map((gate) => (
          <Gate key={gate.value} gate={gate} />
        ))}
      </SquareInner>
    </Square>
  )
}

export default G
