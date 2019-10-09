import React from 'react'
import Membro from './Membro'

export default props =>
    // <div>
    //     <Membro nome="Lucas" sobrenome="Silva"></Membro>
    //     <Membro nome="Jorge" sobrenome="Silva"></Membro>
    //     <Membro nome="Luíza" sobrenome="Silva"></Membro>
    // </div>
    <div>
        <Membro nome="Lucas" sobrenome={props.sobrenome}></Membro>
        <Membro nome="Jorge" sobrenome={props.sobrenome}></Membro>
        <Membro nome="Luíza" sobrenome={props.sobrenome}></Membro>
    </div>