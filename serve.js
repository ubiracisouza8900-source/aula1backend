const http = require('http');
const porta = 3000;

const servidor = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.url === '/') {
    res.statusCode = 200;

    return res.end(JSON.stringify({
      mensagem: 'Olá, back-end!'
    }));
  }
  if (req.url === '/status') {
    res.statusCode = 200;

    return res.end(JSON.stringify({
      status: 'servidor funcionando',
      tempo: process.uptime()
    }));
  }
  res.statusCode = 404;

  res.end(JSON.stringify({
    mensagem: 'Página não encontrada'
  }));
});
servidor.listen(porta, () => {
  console.log(`Servidor iniciado na porta ${porta}`);
});