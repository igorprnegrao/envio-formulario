const scriptURL = '';

const form = document.forms['formulario-contato']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert('Obrigado, por entrar em contato conosco!'))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})