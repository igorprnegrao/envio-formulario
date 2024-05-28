//função eviar dados para a planilha do google drive


const manipularEnviar = (event) => {
    //capturar o evento e da uma preventdefault para evitar que a pág. recarregue
    event.preventDefault();
    const cadastrante = document.querySelector('input[name=quem-cadastrou]').value;
    
    const name = document.querySelector('input[name=seu-nome]').value;
    const numero = document.querySelector('input[name=seu-numero]').value;
    const bairro = document.querySelector('input[name=seu-bairro]').value;
    const texto = document.querySelector('textarea[name=sua-mensagem]').value;
    const autorizacao = document.querySelector('input[type=checkbox]').checked
    const autorizacaoString = autorizacao ? 'sim' : 'não';
    

    

    //Função Post que vai enviar para o endpoint da api sheet monkey
    // através do objeto iremos enviar via json as strings para nossa planilha
    fetch('https://api.sheetmonkey.io/form/9QeWZJqn8RU9AdQiiBNXBu', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cadastrante, name, numero, bairro, texto, autorizacao: autorizacaoString })
    }).then(() => alert('Obrigado por nos cotactar, dados enviados com sucesso!'))
    .then(() => {
        window.location = 'agradecimento.html'
    })
    //após envio temos uma then com função alert e outra com função redirecionar página   
}

// Capturar o evento de submit(enviar) e ativar a função manipularEviar
document.querySelector('form').addEventListener('submit', manipularEnviar)
