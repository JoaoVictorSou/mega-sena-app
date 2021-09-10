import React, { Component } from 'react'
import './Mega.css'

export default class Mega extends Component {
    state = {
        quatidade: 0,
        numeros: []
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
        let numeros = this.state.numeros

        numeros = numeros.map((numero, i) => <li key={i}>{numero}</li>)
        return (
            <div className="Mega">
                <div className="display">
                    <ul>
                        {numeros}
                    </ul>
                </div>
                <input type="number" value={this.state.quatidade} onChange={e => this.onQuantidade(e.target.value)}/>
                <button onClick={e => this.gerar(this.state.quatidade)}>gerar</button>
            </div>
        )
    }
}