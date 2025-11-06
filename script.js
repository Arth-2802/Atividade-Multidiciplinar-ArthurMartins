// Seleciona o formulário
const form = document.getElementById('cadastroForm');

// Adiciona evento de submit
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Pega os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    
    // Cria objeto com os dados
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        dataCadastro: new Date().toLocaleString('pt-BR')
    };
    
    // Salva no localStorage (simulando um banco de dados)
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    // Verifica se o email já existe
    const emailExiste = usuarios.some(user => user.email === email);
    
    if (emailExiste) {
        mostrarMensagem('Este e-mail já está cadastrado!', 'erro');
        return;
    }
    
    // Adiciona novo usuário
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
    // Mostra mensagem de sucesso
    mostrarMensagem('Cadastro realizado com sucesso! 🎉', 'sucesso');
    
    // Limpa o formulário
    form.reset();
    
    // Log no console (para verificação)
    console.log('Usuário cadastrado:', usuario);
    console.log('Total de usuários:', usuarios.length);
});

// Função para mostrar mensagens
function mostrarMensagem(texto, tipo) {
    // Remove mensagem anterior se existir
    const mensagemAntiga = document.querySelector('.message');
    if (mensagemAntiga) {
        mensagemAntiga.remove();
    }
    
    // Cria nova mensagem
    const mensagem = document.createElement('div');
    mensagem.className = `message ${tipo === 'sucesso' ? 'success-message' : 'error-message'}`;
    mensagem.textContent = texto;
    
    // Adiciona CSS para mensagem de erro
    if (tipo === 'erro') {
        mensagem.style.background = '#f44336';
        mensagem.style.color = 'white';
        mensagem.style.padding = '15px';
        mensagem.style.borderRadius = '10px';
        mensagem.style.textAlign = 'center';
        mensagem.style.marginBottom = '20px';
        mensagem.style.animation = 'slideDown 0.3s ease';
    }
    
    // Insere antes do formulário
    const cadastroBox = document.querySelector('.cadastro-box');
    const logo = document.querySelector('.logo');
    cadastroBox.insertBefore(mensagem, logo.nextSibling);
    
    // Remove após 5 segundos
    setTimeout(() => {
        mensagem.style.opacity = '0';
        mensagem.style.transition = 'opacity 0.3s';
        setTimeout(() => mensagem.remove(), 300);
    }, 5000);
}

// Validação em tempo real
document.getElementById('email').addEventListener('input', function(e) {
    const email = e.target.value;
    if (email && !email.includes('@')) {
        e.target.style.borderColor = '#f44336';
    } else {
        e.target.style.borderColor = '#e0e0e0';
    }
});

document.getElementById('senha').addEventListener('input', function(e) {
    const senha = e.target.value;
    if (senha.length > 0 && senha.length < 6) {
        e.target.style.borderColor = '#f44336';
    } else {
        e.target.style.borderColor = '#e0e0e0';
    }
});
