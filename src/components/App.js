import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useState} from 'react'

import Cadastro from "./pages/Cadastro"
import Entrada from "./pages/Entrada"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Saida from "./pages/Saida"

import UserContext from "./pages/context/UserContext"

export default function App(){
    const [user, setUser] = useState(null)

    return (
        <>
        <UserContext.Provider value={{ user, setUser }}>
          <header className="App-header">
            MyWallet
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastrar-entrada" element={<Entrada />} />
                <Route path="/cadastrar-saida" element={<Saida />} />
              </Routes>
            </BrowserRouter>
          </header>
        </UserContext.Provider>
      </>
    )
}