document.addEventListener('DOMContentLoaded', function() {
    // Verificar se o parâmetro 'error' está presente na URL
    const urlParams = new URLSearchParams(window.location.search);
    const error = urlParams.get('error');

    // Se o parâmetro 'error' for igual a 'loginInexistente', exibe a mensagem de erro
    if (error === 'loginInexistente') {
        const errorMessage = document.getElementById('error-message');
        if (errorMessage) {
            errorMessage.classList.remove('d-none');
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Verificar se o parâmetro 'success' está presente na URL
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');

    // Se o parâmetro 'success' for igual a 'cadastroRealizado', exibe a mensagem de sucesso
    if (success === 'cadastroRealizado') {
        const successMessage = document.getElementById('success-message');
        if (successMessage) {
            successMessage.classList.remove('d-none');
        }
    }
});
