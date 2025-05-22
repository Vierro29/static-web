// src/App.js
import React, { useState } from 'react';

function App() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

 const callApi = async () => {
  setLoading(true);
  try {
    const res = await fetch('/api/minhaFuncaoProtegida'); // use o nome correto da sua função aqui
    const data = await res.json();
    setResponse(data.mensagem || JSON.stringify(data)); // pode ser "mensagem", não "message"
  } catch (error) {
    setResponse('Erro ao chamar a API.');
    console.error(error);
  }
  setLoading(false);
};


  return (
    <div className="App">
      <h1>Oiiiiiie time </h1>
      <button onClick={callApi} disabled={loading}>
        {loading ? 'Carregando...' : 'Chamar API'}
      </button>
      <p>Resposta da API: {response}</p>
    </div>
  );
}

export default App;
