import styled from 'styled-components'

interface TProps {
  children: React.ReactNode
}

const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
`

const Channels: React.FC<TProps> = ({ children }) => {
  return <Svg>{children}</Svg>
}

export default Channels
