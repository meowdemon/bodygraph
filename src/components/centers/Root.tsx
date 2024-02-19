import Gate from 'components/Gate'
import { useAppSelector } from 'hooks/redux'
import { BG_COLOR } from 'models/const'
import { Centers } from 'models/types'
import styled from 'styled-components'

const Square = styled.div`
  width: 110px;
  height: 110px;
  background-color: ${BG_COLOR};
  position: absolute;
  left: calc(50% - 30px);
  top: 750px;
`

const SquareInner = styled.div`
  position: relative;
`

const Root = () => {
  const { list: root } = useAppSelector((state) => state.gates)
  const gates = root.filter((gate) => gate.center === Centers.ROOT)

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

export default Root
