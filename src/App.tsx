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
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
