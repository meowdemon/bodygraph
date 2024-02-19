import Gate from 'components/Gate'
import { useAppSelector } from 'hooks/redux'
import { BG_COLOR } from 'models/const'
import { Centers } from 'models/types'
import styled from 'styled-components'

const TriangleUp = styled.div`
  width: 0;
  height: 0;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;
  border-bottom: 90px solid ${BG_COLOR};
  position: absolute;
  left: calc(50% - 35px);
  top: 0;
`

const TriangleUpInner = styled.div`
  position: relative;
`

const Head = () => {
  const { list: head } = useAppSelector((state) => state.gates)
  const gates = head.filter((gate) => gate.center === Centers.HEAD)
  
  return (
    <TriangleUp>
      <TriangleUpInner>
        {gates.map((gate) => (
          <Gate key={gate.value} gate={gate} />
        ))}
      </TriangleUpInner>
    </TriangleUp>
  )
}

export default Head
