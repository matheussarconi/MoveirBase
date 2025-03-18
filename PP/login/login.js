async function cadastrar(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  console.log(email, senha);

  const response = await fetch('http://localhost:3003/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email, senha})
  });

  const result = await response.json();

  if (result.success) {
      alert("Cadastro feito com sucesso");
      window.location.href = "../treino/treino.html";
  } else {
      alert(result.message || "Houve um erro ao cadastrar");
  }
}
