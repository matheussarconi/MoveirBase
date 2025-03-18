const express = require('express');
const cors = require('cors');
const connection = require('./db_config');
const app = express();

app.use(cors());
app.use(express.json());

const port = 3003;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

// Logar usuários
app.post('/logar', (req, res) => {
    const { email, senha } = req.body;
  
    const query = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';
    connection.query(query, [email, senha], (err, result) => {
      if (err) {
        return result.status(500).json({ success: false, message: 'Erro no servidor.' });
      }
  
      if (result.length > 0) {
        res.json({ success: true, message: 'Login bem-sucedido!' });
      } else {
        res.json({ success: false, message: 'Usuário ou senha incorretos!' });
      }
    });
});

// Cadastrar usuários
app.post('/cadastrarUsuario', (req, res)=>{
  const{email, nome, senha}= req.body;
  connection.query(query, [email, nome, senha],(err,results) =>{
    if (err) {
      return res.status(500).json({ success: false, message: 'Erro no servidor.' });
    }

    if (results.length > 0) {
      res.json({ success: true, message: 'Cadastro bem-sucedido!' });
    } else {
      res.json({ success: false, message: 'Cadastro ou senha incorretos!' });
    }
  });
})
