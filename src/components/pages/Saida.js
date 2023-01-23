import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import UserContext from './context/UserContext';

export default function Saida() {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  const { user } = useContext(UserContext);
  const navigator = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      description,
      type: 'saida',
      value: parseFloat(value)
    };
    const headers = {
      headers: { Authorization: `Bearer ${user.token}` }
    };
    try {
      await axios.post('http://localhost:5009/transacoes', body, headers);
      alert('Registro feito com sucesso!');
      navigator('/home');
    } catch (error) {
      console.log('Deu xablaul');
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Nova saída</h1>
      <form>
        { }
        <input type="number" placeholder="Valor" value={value} onChange={e => setValue(e.target.value)}/><br/>

        { }
        <input type="text" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}/><br/>
        <button type="submit" onClick={handleSubmit}>
          Salvar saída
        </button>
      </form>
    </div>
  );
}