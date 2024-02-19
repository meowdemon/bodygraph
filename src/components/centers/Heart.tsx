import Gate from 'components/Gate'
import { useAppSelector } from 'hooks/redux'
import { BG_COLOR } from 'models/const'
import { Centers } from 'models/types'
import styled from 'styled-components'

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 70px solid transparent;
  border-bottom: 80px solid ${BG_COLOR};
  transform: rotate(13deg);
  position: absolute;
  top: 470px;
  left: calc(50% + 140px);
`

const HeartInner = styled.div`
  position: relative;
  transform: rotate(-13deg);
`
const Heart = () => {
  const { list: heart } = useAppSelector((state) => state.gates)
  const gates = heart.filter((gate) => gate.center === Centers.HEART)

  return (
    <Triangle>
      <HeartInner>
        {gates.map((gate) => (
          <Gate key={gate.value} gate={gate} />
        ))}
      </HeartInner>
    </Triangle>
  )
}

export default Heart
