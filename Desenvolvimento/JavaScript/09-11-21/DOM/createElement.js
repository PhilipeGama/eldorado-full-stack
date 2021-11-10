window.onload = () => {

    document.getElementById('botao').onclick = () => {
        let elemento = document.createElement('p');
        elemento.innerHTML = "Lorem Lipsum";
        let alvo = document.getElementById('container');
        alvo.appendChild(elemento);
    }

}