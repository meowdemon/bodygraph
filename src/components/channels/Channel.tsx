import { useAppSelector } from 'hooks/redux'
import { IGate } from 'models/types'
import styled, { keyframes } from 'styled-components'

type TProps = {
  gate: IGate
  color: string
  width?: number
}

const slideIn = keyframes`
100% {
  stroke-dashoffset: 0;
  
}
`
const Line = styled.line`
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${slideIn} 10s ease-out forwards;
`

const Channel: React.FC<TProps> = ({ gate, color, width }) => {
  const { list } = useAppSelector((state) => state.gates)
  const pairGate = list.find((item) => item.value === gate.pairGate)

  if (!pairGate) return

  const x1 = gate.x
  const y1 = gate.y
  const x2 = (x1 + pairGate.x) / 2
  const y2 = (y1 + pairGate.y) / 2

  return (
    <Line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth={width}
    ></Line>
  )
}

export default Channel
