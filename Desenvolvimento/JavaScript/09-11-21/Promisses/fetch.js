window.onload = () => {
    const baseUrl = "http://localhost:3000";
    document.getElementById("bt_listar").onclick = () => {
        fetch(`${baseUrl}/produtos`).then((response) => {
            return response.json()
        })
        .then(response => {
            const divPessoa = document.getElementById("pessoa");

            for (let item of response){

                divPessoa.innerHTML += `<p><strong>Nome:</strong> ${item.nome}</p>
                    <p><strong>Peso: </strong>${item.preco}</p>
                    <p><img src="${item.foto}" width="100" alt=""></p>
                `
            }
        });
    }

    document.getElementById("bt_add").onclick = () => {
        const params = {
            method: "POST",
            header: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: { nome: "Teclado RGB", preco: 299.00, foto: "foto.jpg" }
        }

        fetch(`${baseUrl}/produtos`, params).then(response => {
            return response.json();
        }).then(response => {
            console.log(response);
        }).catch(erro => {
            console.log(erro)
        })

    }
}