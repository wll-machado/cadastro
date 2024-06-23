
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var confirmationPassword = document.getElementById('confirmation_password').value.trim();
    var errorMessage = document.getElementById('error_message');

   
    errorMessage.textContent = '';

    
    if (name === '' || email === '' || password === '' || confirmationPassword === '') {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    
    if (password !== confirmationPassword) {
        errorMessage.textContent = 'As senhas não coincidem.';
        return;
    }

    
    alert('Formulário enviado com sucesso!');
    
    // event.target.submit(); 
});

   
