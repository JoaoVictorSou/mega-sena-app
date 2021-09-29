import React, { Component } from 'react'
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
`

const WrapperMega = styled.div`
    width: 250px;
    padding: 5px;
    border: 2px dashed #558b2f;

    .display {
        width: 235px;
        margin: auto;
        margin-bottom: 5px;
        border-radius: 5px;
        background-color: #558b2f;
    }

    .display ul {
        margin: 0;
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        min-height: 55px;
    }

    .display ul li {
        margin-bottom: 5px;
        width: 50px;
        border-radius: 25px;
        line-height: 50px;
        background-color: #f1f8e9;
        color: #ff3d00;
        font-weight: bold;
        text-align: center;
    }

    li + li {
        margin-left: 5px;
    }

    .display ul li:nth-child(4n) + li {
        margin-left: 0;
    }

    div.entrada {
        display: flex;
        justify-content: space-between;
        width: 240px;
        margin: auto;
    }

    input, button {
        height: 25px;
    }

    input {
        width: 150px;
    }

    button {
        align-self: center;
        box-sizing: content-box;
        background-color: #558b2f;
        border: none;
        text-transform: uppercase;
        width: 65px;
        color: #f1f8e9;
        font-weight: bold;
        cursor: pointer;
    }
`


export default class Mega extends Component {
    state = {
        quatidade: 0,
        numeros: []
    }

    gerar = (qtd) => {
        let gerados = []
        for (let i = 0; i < qtd; i++) {
            let numero = parseInt(Math.random() * (61 - 0) + 0)

            if (!gerados.includes(numero)) {
                gerados.push(numero)
            } else {
                i--
            }
        }

        gerados.sort((a, b) => a-b)

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
                <GlobalStyle />
                <WrapperMega>
                    <div className="display">
                        <ul>
                            {numeros}
                        </ul>
                    </div>
                    <div className="entrada">
                        <input type="number" value={this.state.quatidade} onChange={e => this.onQuantidade(e.target.value)}/>
                        <button onClick={e => this.gerar(this.state.quatidade)}>gerar</button>
                    </div>
                </WrapperMega>
            </div>
        )
    }
}