import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import styled from 'styled-components'

export default function Cadastro (){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigator = useNavigate();

    async function cadastrar (e){
        e.preventDefault()
        const body = {email, password, name, confirmPassword}

        try {
            await axios.post("http://localhost:5000/cadastro", body)
            navigator("/")
        } catch (error) {
            console.error("Erro ao cadastrar")
        }
    }

    return(
        <>
            <form>
                <input type="text" placeholder='nome' onChange={e=> setName(e.target.value)}></input><br />
                <input type="text" placeholder='email' onChange={e=> setEmail(e.target.value)}></input><br />
                <input type="password" placeholder='senha' onChange={e=> setPassword(e.target.value)}></input><br />
                <input type="password" placeholder='confirmar senha' onChange={e=> setConfirmPassword(e.target.value)}></input><br />
                <button type="submit" onClick={cadastrar}>Cadastrar</button><br />
                <p><Link to="/" style={{color: 'white', fontSize: 14}}>Já tem uma conta? Entre agora!</Link></p>
            </form>
        </>
    )
}