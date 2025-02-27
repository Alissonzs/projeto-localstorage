// Função para salvar os dados no LocalStorage
function salvar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cidade = document.getElementById("cidade").value;

    if (nome && email && telefone && cidade) {
        let dados = JSON.parse(localStorage.getItem("usuarios")) || [];
        dados.push({ nome, email, telefone, cidade });
        localStorage.setItem("usuarios", JSON.stringify(dados));
        alert("Dados salvos!");
    } else {
        alert("Preencha todos os campos!");
    }
}

// Função para limpar os campos do formulário
function limpar() {
    document.getElementById("formulario").reset();
}

// Função para carregar os dados na tabela
function carregarTabela() {
    let tabela = document.getElementById("tabela-dados");
    let dados = JSON.parse(localStorage.getItem("usuarios")) || [];

    tabela.innerHTML = "";
    dados.forEach(user => {
        let row = tabela.insertRow();
        row.insertCell(0).textContent = user.nome;
        row.insertCell(1).textContent = user.email;
        row.insertCell(2).textContent = user.telefone;
        row.insertCell(3).textContent = user.cidade;
    });
}

// Chamar a função quando a página de lista for carregada
if (document.getElementById("tabela-dados")) {
    window.onload = carregarTabela;
}
