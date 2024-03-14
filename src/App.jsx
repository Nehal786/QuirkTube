
import './App.css'
import Body from './components.jsx/Body'
import Head from './components.jsx/Head'
import store from './utils/store'
import { Provider } from 'react-redux'

function App() {
  

  return (
    
    <Provider store = {store}>
     <div>
      <Head/>
      <Body/>
     </div>
     </Provider>
    

  )
}

export default App
