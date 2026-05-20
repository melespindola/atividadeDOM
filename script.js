const titulo = document.querySelector('#titulo');
const botao = document.querySelector('#btn-mudar');
const caixa = document.querySelector('#caixa-magica');

botao.addEventListener('click', () => {
    titulo.innerText = "DOM Manipulado com sucesso!";
    titulo.style.color = "purple";
    document.body.style.backgroundColor = "#F0F0F0";
});

window.addEventListener('keydown', () => {
    console.log("Você clicou a tecla " + event.key);

    if(event.key === 'r'){
        caixa.style.backgroundColor = "red";
        return;
    }
    if(event.key === 'b'){
        caixa.style.backgroundColor = "blue";
        return;
    }
    if(event.key === 'g'){
        caixa.style.backgroundColor = "green";
        return;
    }
    if(event.key === 'Enter'){
        caixa.style.padding = "50px";
        return;
    }
    if(event.key === 'Backspace'){
        caixa.textContent = '';
        return;
    }
})