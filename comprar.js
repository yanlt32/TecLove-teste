// Variáveis para armazenar os dados selecionados
let planoSelecionado = '';
let fotosAdicionais = 0;

// Função para selecionar um plano
function selecionarPlano(plano) {
    try {
        planoSelecionado = plano;

        // Atualizar a interface com o plano selecionado
        if (plano === 'planoBasico') {
            fotosAdicionais = 5;
        } else if (plano === 'planoPersonalizado') {
            fotosAdicionais = 10;
        } else if (plano === 'planoPremium') {
            fotosAdicionais = 15;
        }

        // Exibir a seção de personalização
        document.getElementById('selecao-plano').style.display = 'none';
        document.getElementById('personalizacao').style.display = 'block';

        // Atualizar o número de fotos permitido
        document.getElementById('max-fotos').textContent = fotosAdicionais;

    } catch (error) {
        console.error("Erro ao selecionar o plano:", error);
    }
}

// Função para finalizar a compra
function finalizarCompra() {
    try {
        // Exibir a confirmação
        document.getElementById('personalizacao').style.display = 'none';
        document.getElementById('confirmacao').style.display = 'block';

        // Atualizar os detalhes da compra
        document.getElementById('plano-selecionado').innerHTML = `Plano selecionado: <strong>${planoSelecionado}</strong>`;
        document.getElementById('fotos-adicionais').innerHTML = `Fotos adicionais: <strong>${fotosAdicionais}</strong>`;
    } catch (error) {
        console.error("Erro ao finalizar a compra:", error);
    }
}

// Função para enviar o formulário de e-mail
document.getElementById('form-email').addEventListener('submit', function (event) {
    event.preventDefault();

    try {
        // Obter o e-mail inserido pelo usuário
        const email = document.getElementById('email').value;

        // Verificar se o e-mail é válido
        if (email && email.includes('@')) {
            alert(`Compra finalizada! O link do seu site será enviado para: ${email}`);

            // Aqui você pode integrar a API de envio de e-mail, como Nodemailer, SendGrid, etc.
            // Por enquanto, estamos apenas exibindo o alerta

            // Limpar o campo de e-mail após envio
            document.getElementById('email').value = '';

            // Resetar a exibição das seções
            document.getElementById('confirmacao').style.display = 'none';
            document.getElementById('selecao-plano').style.display = 'block';

            // Resetar as variáveis de plano e fotos
            planoSelecionado = '';
            fotosAdicionais = 0;

        } else {
            alert("Por favor, insira um e-mail válido.");
        }
    } catch (error) {
        console.error("Erro ao enviar o e-mail:", error);
    }
});

// Função para enviar o formulário de personalização
document.getElementById('form-personalizacao').addEventListener('submit', function (event) {
    event.preventDefault();

    try {
        // Exibir a seção de confirmação
        finalizarCompra();
    } catch (error) {
        console.error("Erro ao enviar o formulário de personalização:", error);
    }
});
