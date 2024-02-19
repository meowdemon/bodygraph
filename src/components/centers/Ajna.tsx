import Gate from 'components/Gate'
import { useAppSelector } from 'hooks/redux'
import { BG_COLOR } from 'models/const'
import { Centers } from 'models/types'
import styled from 'styled-components'

const TriangleDown = styled.div`
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;
  border-top: 90px solid ${BG_COLOR};
  position: absolute;
  left: calc(50% - 35px);
  top: 100px;
`

const TriangleDownInner = styled.div`
  position: relative;
`

const Ajna = () => {
  const { list: ajna } = useAppSelector((state) => state.gates)
  const gates = ajna.filter((gate) => gate.center === Centers.AJNA)

  return (
    <TriangleDown>
      <TriangleDownInner>
        {gates.map((gate) => (
          <Gate key={gate.value} gate={gate} />
        ))}
      </TriangleDownInner>
    </TriangleDown>
  )
}

export default Ajna
