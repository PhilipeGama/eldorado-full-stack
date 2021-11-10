window.onload = () => {
    document.getElementById('campo').onkeyup = () => {
        let valor = document.getElementById('campo').value;
        document.getElementById('alvo').innerHTML = valor;
    }
}