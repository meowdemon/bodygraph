import Bodygrapth from 'components/Bodygraph'
import Channel from 'components/channels/Channel'
import Channels from 'components/channels/Channels'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { BG_COLOR } from 'models/const'
import { openRandomGate } from 'store/slices/GateSlice'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 800px;
  height: 1000px;
`

const Button = styled.button`
  position: absolute;
  left: 25%;
  top: 25%;
  width: 70px;
  height: 40px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: ${BG_COLOR};
  color: white;

  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 2px 2px 8px ${BG_COLOR};
  }
`

const App = () => {
  const dispath = useAppDispatch()
  const { list } = useAppSelector((state) => state.gates)

  return (
    <Container>
      <Bodygrapth />

      <Channels>
        {list.map((gate) => (
          <Channel key={gate.value} gate={gate} color="#babac3" />
        ))}
      </Channels>

      <Channels>
        {list.map(
          (gate) =>
            gate.isOpen && (
              <Channel key={gate.value} gate={gate} color={'blue'} width={2} />
            )
        )}
      </Channels>

      <Button
        onClick={() => {
          dispath(openRandomGate())
        }}
      >
        Random
      </Button>
    </Container>
  )
}

export default App
