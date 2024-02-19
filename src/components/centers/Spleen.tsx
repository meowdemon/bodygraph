import Gate from 'components/Gate'
import { useAppSelector } from 'hooks/redux'
import { BG_COLOR } from 'models/const'
import { Centers } from 'models/types'
import styled from 'styled-components'

const TriangleRight = styled.div`
  width: 0;
  height: 0;
  border-top: 70px solid transparent;
  border-bottom: 70px solid transparent;
  border-left: 100px solid ${BG_COLOR};
  position: absolute;
  left: calc(50% - 250px);
  top: 600px;
`

const TriangleRightInner = styled.div`
  position: relative;
`

const Spleen = () => {
  const { list: spleen } = useAppSelector((state) => state.gates)
  const gates = spleen.filter((gate) => gate.center === Centers.SPLEEN)

  return (
    <TriangleRight>
      <TriangleRightInner>
        {gates.map((gate) => (
          <Gate key={gate.value} gate={gate} />
        ))}
      </TriangleRightInner>
    </TriangleRight>
  )
}

export default Spleen
