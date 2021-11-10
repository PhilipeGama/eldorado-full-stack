window.onload = () => {
    document.getElementById("botao").onclick = () => {
        let promisse = new Promise((resolve, reject) => {
            try {
                resolve(10 + 5);
            } catch (e) {
                reject(e);
            }

        });
        
        promisse.then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });        
    }
}