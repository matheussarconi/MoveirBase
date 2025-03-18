async function cadastrar(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  console.log(nome, email, senha);

  const response = await fetch('http://localhost:3003/cadastrarUsuario', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha})
  });

  const result = await response.json();

  if (result.success) {
      alert("Cadastro feito com sucesso");
      window.location.href = "../login/login.html";
  } else {
      alert(result.message || "Houve um erro ao cadastrar");
  }
}
