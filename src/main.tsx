import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'normalize.css'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import { store } from 'store/index.ts'

const Global = createGlobalStyle`
*{
  font-family: sans-serif;
  font-size: 12px;
  font-style: bold;
}
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Global />
    <App />
  </Provider>
)
