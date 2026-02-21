import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import App from './App'
import { Provider } from 'react-redux'
import { store } from '../store'




 


createRoot(document.getElementById('root')).render(
  <StrictMode>
{/* birinci gelen store-- react-reducdan default gelen store-dur */}
{/* ikinci store--- menim ozumun store.js-de yaratdigim store-dur */}
 <Provider store={store}>
    <App />
 </Provider>
  </StrictMode>,
)
