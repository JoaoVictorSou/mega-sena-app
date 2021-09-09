import React, { Component } from 'react'

export default class Mega extends Component {
    state = {
        quatidade: 5,
        numeros: [1, 2, 3]
    }

    gerar = (qtd) => {
        let gerados = []
        for (let i = 0; i < qtd; i++) {
            let numero = parseInt(Math.random() * (60 - 0) + 0)

            if (gerados.indexOf(numero) === -1) {
                gerados.push(numero)
            } else {
                i--
            }
        }

        this.setState({
            numeros: gerados
        })
    }
    
    onQuantidade(novaQuantidade) {
        this.setState({
            quatidade: +novaQuantidade
        })
    }

    render() {
        return (
            <div className="Mega">
                <div>
                    {this.state.numeros}
                    <input type="number" value={this.state.quatidade} onChange={e => this.onQuantidade(e.target.value)}/>
                    <button onClick={e => this.gerar(this.state.quatidade)}>Click</button>
                </div>
            </div>
        )
    }
}