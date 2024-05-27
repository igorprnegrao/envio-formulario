const scriptURL = 'https://script.google.com/macros/s/AKfycbx58wkid2P3swbL-4dpsgj1keSdLT_4kIuhWpjrrNo95neCbzoReMF0I48z1zbPqiEX/exec';

const form = document.forms['formulario-contato']

form.addEventListener('enviar', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert('Obrigado, por entrar em contato conosco!'))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})