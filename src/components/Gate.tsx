import { useAppDispatch } from 'hooks/redux'
import { IGate } from 'models/types'
import { createRef, useEffect } from 'react'
import { setСoordinates } from 'store/slices/GateSlice'
import styled from 'styled-components'

type TProps = {
  gate: IGate
}

const StyledGate = styled.div<{ top: number; left: number; color: string }>`
  position: absolute;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  aligh-items: center;
  transition: 0.3s;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  color: ${(props) => props.color};
`

const Gate: React.FC<TProps> = ({ gate }) => {
  const ref = createRef<HTMLDivElement>()
  const dispath = useAppDispatch()

  useEffect(() => {
    if (ref.current) {
      let x = +ref.current.getBoundingClientRect().x + 8
      let y = +ref.current.getBoundingClientRect().y + 8

      dispath(setСoordinates({ ...gate, x, y }))
    }
  }, [])

  return (
    <>
      <StyledGate top={gate.top} left={gate.left} color={gate.color} ref={ref}>
        {gate.value}
      </StyledGate>
    </>
  )
}

export default Gate
