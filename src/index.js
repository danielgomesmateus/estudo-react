import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './components/PrimeiroComponente'
// import {ComponenteA, ComponenteB} from './components/SegundoComponente'
// import MultiElementos from './components/MultiElementos'
import FamiliaSilva from './components/FamiliaSilva'
import Familia from './components/Familia'
import Membro from './components/Membro'

const elemento = document.getElementById('root')
// const jsx = <h1>Olá, humano!</h1>
// ReactDOM.render(jsx, elemento)
ReactDOM.render(
    <div>
        <Familia sobrenome="Gomes">
            <Membro nome="Jorge"></Membro>
            <Membro nome="Lucas"></Membro>
        </Familia>
        <FamiliaSilva sobrenome="Silva Pereira"></FamiliaSilva>
        {/* <Familia>
            <Membro nome="Jorge" sobrenome="Gomes"></Membro>
            <Membro nome="Lucas" sobrenome="Gomes"></Membro>
        </Familia>
        <Familia>
            <Membro nome="Gustavo" sobrenome="Arruda"></Membro>
            <Membro nome="Henrique" sobrenome="Arruda"></Membro>
        </Familia> */}
        {/* <FamiliaSilva></FamiliaSilva>
        <MultiElementos></MultiElementos>
        <ComponenteA mensagem="Hello"></ComponenteA>
        <ComponenteB mensagem="Hi"></ComponenteB>
        <PrimeiroComponente nome="Daniel"></PrimeiroComponente> */}
    </div>,
    elemento
)