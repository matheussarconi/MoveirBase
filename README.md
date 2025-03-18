Moveir

📌 Sobre o Projeto

Moveir é um aplicativo desenvolvido para auxiliar pessoas na prática de exercícios físicos. Ele permite que os usuários criem uma conta, façam login e acompanhem seus treinos de maneira organizada e intuitiva.

🎯 Objetivo

O objetivo do Moveir é oferecer uma plataforma acessível para quem deseja seguir um plano de treino, visualizar exercícios e acompanhar seu progresso de forma eficiente.

🛠 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

HTML para a estrutura das páginas;

CSS para o design e responsividade;

JavaScript para a interatividade e funcionalidades dinâmicas.

🚀 Funcionalidades Implementadas

Criação de conta: O usuário pode se cadastrar informando nome, email e senha.

Login seguro: Acesso ao sistema utilizando email e senha.

Plano de treino: Interface intuitiva para visualizar os exercícios e o progresso do usuário.

📂 Estrutura do Banco de Dados

O banco de dados foi estruturado para armazenar as informações essenciais dos usuários:

CREATE DATABASE IF NOT EXISTS moveir;
USE moveir;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
);

