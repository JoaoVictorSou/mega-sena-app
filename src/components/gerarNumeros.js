function gerar(quantidade) {
    let gerados = []
    for (let i = 0; i < quantidade; i++) {
        let numero = parseInt(Math.random() * (60 - 0) + 0)

        if (gerados.indexOf(numero) === -1) {
            gerados.push(numero)
        } else {
            i--
        }
    }

    console.log(gerados)
}

gerar(5)