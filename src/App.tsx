import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Contato from './sections/Contato'
import Curriculo from './sections/Curriculo'
import Header from './sections/Header'
import HeaderMobile from './sections/Header_Mobile'
import Projetos from './sections/Projetos'
import Apresentacao from './sections/Sobre'

function App() {

  const isMobile = window.innerWidth

  return (
    <div className="containerPai">
      <div className='containerFilho'>
        {isMobile <= 768 ? <HeaderMobile/> : <Header />}
        <Apresentacao />
        <Projetos />
        <Curriculo />
        <Contato />
        <ToastContainer />
      </div>
    </div>
  )
}

export default App