import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './components/PrimeiroComponente'
import {ComponenteA, ComponenteB} from './components/SegundoComponente'
import MultiElementos from './components/MultiElementos'

const elemento = document.getElementById('root')
const jsx = <h1>Olá, humano!</h1>
ReactDOM.render(jsx, elemento)
ReactDOM.render(
    <div>
        <MultiElementos></MultiElementos>
        <ComponenteA mensagem="Hello"></ComponenteA>
        <ComponenteB mensagem="Hi"></ComponenteB>
        <PrimeiroComponente nome="Daniel"></PrimeiroComponente>
    </div>,
    elemento
)