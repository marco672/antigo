// Função de Login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('login-message');

    const validUsername = 'usuario';
    const validPassword = 'senha123';

    if (username === validUsername && password === validPassword) {
        loginMessage.style.color = 'green';
        loginMessage.textContent = 'Login bem-sucedido!';
    } else {
        loginMessage.style.color = 'red';
        loginMessage.textContent = 'Usuário ou senha incorretos.';
    }
}

// Função para Enviar Formulário
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message');

    if (name && email && message) {
        formMessage.style.color = 'green';
        formMessage.textContent = 'Formulário enviado com sucesso!';
    } else {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Por favor, preencha todos os campos.';
    }
}
// Selecionar todas as imagens da galeria
const images = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementsByClassName('close')[0];

// Adiciona um evento de clique para cada imagem
images.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = image.src;
    });
});

// Fecha o modal ao clicar no 'X'
closeModal.onclick = function() {
    modal.style.display = 'none';
}

// Fecha o modal ao clicar fora da imagem
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

