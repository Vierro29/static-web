// src/App.js
import React, { useState } from 'react';

function App() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const callApi = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/hello'); // Altere o endpoint conforme sua API
      const data = await res.json();
      setResponse(data.message || JSON.stringify(data));
    } catch (error) {
      setResponse('Erro ao chamar a API.');
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Exemplo de Front-End com React</h1>
      <button onClick={callApi} disabled={loading}>
        {loading ? 'Carregando...' : 'Chamar API'}
      </button>
      <p>Resposta da API: {response}</p>
    </div>
  );
}

export default App;
