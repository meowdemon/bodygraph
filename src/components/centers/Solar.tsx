import Gate from 'components/Gate'
import { useAppSelector } from 'hooks/redux'
import { BG_COLOR } from 'models/const'
import { Centers } from 'models/types'
import styled from 'styled-components'

const TriangleLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 70px solid transparent;
  border-bottom: 70px solid transparent;
  border-right: 100px solid ${BG_COLOR};
  position: relative;
  left: calc(50% + 250px);
  top: 600px;
`
const TriangleLeftInner = styled.div`
  position: relative;
`

const Solar = () => {
  const { list: solar } = useAppSelector((state) => state.gates)
  const gates = solar.filter((gate) => gate.center === Centers.SOLAR)

  return (
    <TriangleLeft>
      <TriangleLeftInner>
        {gates.map((gate) => (
          <Gate key={gate.value} gate={gate} />
        ))}
      </TriangleLeftInner>
    </TriangleLeft>
  )
}

export default Solar
