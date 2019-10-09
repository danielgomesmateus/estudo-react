import React from 'react'

const ComponenteA = (props) =>
    <h1>Primeiro diz: {props.mensagem}</h1>

const ComponenteB = (props) =>
    <h2>Segundo diz: {props.mensagem}</h2>

export {ComponenteA, ComponenteB}