//função eviar dados para a planilha do google drive


const manipularEnviar = (event) => {
    //capturar o evento e da uma preventdefault para evitar que a pág. recarregue
    event.preventDefault();
    
    const name = document.querySelector('input[name=seu-nome]').value;
    const numero = document.querySelector('input[name=seu-numero]').value;
    const email = document.querySelector('input[name=seu-email]').value;
    const texto = document.querySelector('textarea[name=sua-mensagem]').value;

    
    //Função Post que vai enviar para o endpoint da api sheet monkey
    // através do objeto iremos enviar via json as strings para nossa planilha
    fetch('https://api.sheetmonkey.io/form/9QeWZJqn8RU9AdQiiBNXBu', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, numero, email, texto})
    }).then(() => alert('Obrigado por nos cotactar, dados enviados com sucesso!'))
    .then(() => {
        window.location = 'agradecimento.html'
    })
}

// Capturar o evento de submit(enviar) e ativar a função manipularEviar
document.querySelector('form').addEventListener('submit', manipularEnviar)
