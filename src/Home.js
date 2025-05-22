// src/Home.js
import React, { useState } from 'react';

function Home() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const callApi = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/minhaFuncaoProtegida');
      const data = await res.json();
      setResponse(data.mensagem || JSON.stringify(data));
    } catch (error) {
      setResponse('Erro ao chamar a API.');
      console.error(error);
    }
    setLoading(false);
  };

  const handleLogout = () => {
    window.location.href = '/.auth/logout?post_logout_redirect_uri=/logout-confirmado';
  };

  return (
    <div className="App" style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Oiiiiiie galera, acho que agora foi kkkk </h1>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={callApi} disabled={loading}>
          {loading ? 'Carregando...' : 'Chamar API'}
        </button>

        <button onClick={handleLogout} style={{ marginLeft: '10px' }}>
          Sair
        </button>
      </div>

      <p><strong>Resposta da API:</strong></p>
      <pre>{response}</pre>
    </div>
  );
}

export default Home;
