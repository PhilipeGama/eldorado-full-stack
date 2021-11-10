window.onload = () => {
    // onblur = quando algum elemento perde o foco ou selecao;
    // onfocus = quando alguem elemento ganha o foco;
    document.getElementById('campo').onblur = () => {
        alert("Sai do campo!");
    }
}