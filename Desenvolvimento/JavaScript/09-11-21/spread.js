// spread - espalhar
const frutasVermelhas = ["Morango", "Cereja", "Framboesa"];
const frutasAmarelas = ["Banana", "Pêra"];
const frutas = ["Mamão", "Melancia"];



const todasFrutas = [...frutas, ...frutasVermelhas, ...frutasAmarelas];

// const todasFrutas = [];
// todasFrutas.push(frutasVermelhas[0]);
// todasFrutas.push(frutasVermelhas[1]);
// todasFrutas.push(frutasAmarelas[0]);
console.log(todasFrutas);