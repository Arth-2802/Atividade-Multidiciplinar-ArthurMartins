// Seleciona o formulário e os campos
const form = document.getElementById('cadastroForm');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const confirmarSenhaInput = document.getElementById('confirmarSenha');

// Seleciona as mensagens de erro
const nomeError = document.getElementById('nomeError');
const emailError = document.getElementById('emailError');
const senhaError = document.getElementById('senhaError');
const confirmarSenhaError = document.getElementById('confirmarSenhaError');

// Função para validar nome
function validarNome() {
    const nome = nomeInput.value.trim();
    
    if (nome === '') {
        mostrarErro(nomeInput, nomeError, 'O nome é obrigatório');
        return false;
    } else if (nome.length < 3) {
        mostrarErro(nomeInput, nomeError, 'O nome deve ter pelo menos 3 caracteres');
        return false;
    } else {
        mostrarSucesso(nomeInput, nomeError);
        return true;
    }
}

// Função para validar email
function validarEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === '') {
        mostrarErro(emailInput, emailError, 'O e-mail é obrigatório');
        return false;
    } else if (!emailRegex.test(email)) {
        mostrarErro(emailInput, emailError, 'Digite um e-mail válido');
        return false;
    } else {
        mostrarSucesso(emailInput, emailError);
        return true;
    }
}

// Função para validar senha
function validarSenha() {
    const senha = senhaInput.value;
    
    if (senha === '') {
        mostrarErro(senhaInput, senhaError, 'A senha é obrigatória');
        return false;
    } else if (senha.length < 6) {
        mostrarErro(senhaInput, senhaError, 'A senha deve ter pelo menos 6 caracteres');
        return false;
    } else {
        mostrarSucesso(senhaInput, senhaError);
        return true;
    }
}

// Função para validar confirmação de senha
function validarConfirmarSenha() {
    const senha = senhaInput.value;
    const confirmarSenha = confirmarSenhaInput.value;
    
    if (confirmarSenha === '') {
        mostrarErro(confirmarSenhaInput, confirmarSenhaError, 'Confirme sua senha');
        return false;
    } else if (senha !== confirmarSenha) {
        mostrarErro(confirmarSenhaInput, confirmarSenhaError, 'As senhas não coincidem');
        return false;
    } else {
        mostrarSucesso(confirmarSenhaInput, confirmarSenhaError);
        return true;
    }
}

// Função para mostrar erro
function mostrarErro(input, errorElement, mensagem) {
    input.classList.add('error');
    input.classList.remove('success');
    errorElement.textContent = mensagem;
}

// Função para mostrar sucesso
function mostrarSucesso(input, errorElement) {
    input.classList.remove('error');
    input.classList.add('success');
    errorElement.textContent = '';
}

// Adiciona validação em tempo real
nomeInput.addEventListener('blur', validarNome);
emailInput.addEventListener('blur', validarEmail);
senhaInput.addEventListener('blur', validarSenha);
confirmarSenhaInput.addEventListener('blur', validarConfirmarSenha);

// Valida ao digitar na confirmação de senha
confirmarSenhaInput.addEventListener('input', function() {
    if (confirmarSenhaInput.value !== '') {
        validarConfirmarSenha();
    }
});

// Evento de submit do formulário
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Valida todos os campos
    const nomeValido = validarNome();
    const emailValido = validarEmail();
    const senhaValida = validarSenha();
    const confirmarSenhaValida = validarConfirmarSenha();
    
    // Se todos os campos forem válidos
    if (nomeValido && emailValido && senhaValida && confirmarSenhaValida) {
        // Coleta os dados do formulário
        const dadosCadastro = {
            nome: nomeInput.value.trim(),
            email: emailInput.value.trim(),
            senha: senhaInput.value
        };
        
        // Exibe os dados no console (você pode enviar para um servidor aqui)
        console.log('Cadastro realizado com sucesso!');
        console.log(dadosCadastro);
        
        // Mostra mensagem de sucesso
        alert('Cadastro realizado com sucesso!\n\nNome: ' + dadosCadastro.nome + '\nE-mail: ' + dadosCadastro.email);
        
        // Limpa o formulário
        form.reset();
        
        // Remove as classes de sucesso
        document.querySelectorAll('input').forEach(input => {
            input.classList.remove('success');
            input.classList.remove('error');
        });
    }
});
