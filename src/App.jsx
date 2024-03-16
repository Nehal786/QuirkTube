
import './App.css'
import Body from './components.jsx/Body'
import Head from './components.jsx/Head'
import store from './utils/store'
import { Provider } from 'react-redux'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import MainContainer from './components.jsx/MainContainer'
import WatchPage from './components.jsx/WatchPage'



const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element: <MainContainer/>

    },
    {
      path:"watch",
      element: <WatchPage/>
    }
  ]
  
}])

function App() {
  

  return (
    
    <Provider store = {store}>
     <div>
      <Head/>
      <RouterProvider router={appRouter}/>
     </div>
     </Provider>
    

  )
}

export default App
