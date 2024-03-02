import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import PerfilUsuario from './pages/PerfilUsuario/PerfilUsuario'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/Perfil_de_usuario' Component={PerfilUsuario}/>
      </Routes>
    </BrowserRouter>
  )

}

export default App
