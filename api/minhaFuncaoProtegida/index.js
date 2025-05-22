module.exports = async function (context, req) {
  const encodedPrincipal = req.headers['x-ms-client-principal'];

  if (!encodedPrincipal) {
    context.res = {
      status: 401,
      body: { error: 'Usuário não autenticado.' }
    };
    return;
  }

  const decoded = Buffer.from(encodedPrincipal, 'base64').toString('ascii');
  const user = JSON.parse(decoded);

  // 🔧 Remove "anonymous" da lista de permissões
  const permissoesFiltradas = (user.userRoles || []).filter(
    role => role !== 'anonymous'
  );

  context.res = {
    status: 200,
    body: {
      mensagem: 'Acesso autorizado à API!',
      usuario: user.userDetails,
      identidade: user.identityProvider,
      permissoes: permissoesFiltradas
    }
  };
};
