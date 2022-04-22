import React, { useState } from 'react';
import Input from "./Form/Input";
import Select from './Form/Select';


function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  return (
    <form>
      <Select options={['smartphone', 'tablet']} />
      <Input id='nome' label="nome" value={nome} setValue={setNome}/>
      <Input id='email' label="email" value={email} setValue={setEmail}/> 
      <button>Enviar</button>
    </form>
  );
}

export default App;
