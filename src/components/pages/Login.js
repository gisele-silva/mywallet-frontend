import axios from "axios"
import { useContext, useState } from "react"
import UserContext from "./context/UserContext"
import {Link, useNavigate} from 'react-router-dom'
import styled from "styled-components"

export default function Login (){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {setUser} = useContext(UserContext)
    const navigator = useNavigate()

    async function enviar (e){
        e.preventDefault()
        const body = {email, password}

        try {
            const data = await axios.post ("http://localhost:5000/login", body);
            setUser(data);
            navigator("/home")
        } catch (error) {
            console.log(error)
        }
    }

    return (
 
        <>
            <form>
                <input type="text" placeholder="email" onChange={e =>setEmail(e.target.value)}/> <br />
                <input type="text" placeholder="senha" onChange={e =>setPassword    (e.target.value)}/> <br />
                <button onClick={enviar}>Entrar</button>
                <p><Link to="/cadastro" style={{color: 'white', fontSize: 14}}>Primeira vez? Cadastrate-se!</Link></p>
            </form>
        </>
    )
}

const Button = styled.button`
    background-color: #A328D6;
    color: white;
    font-size: 20px;
    border-radius: 5px;
`