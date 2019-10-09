import React from 'react'
import { filhosComProps } from '../utils/utils'

export default props =>
    <div>
        {/* {props.children} */}
        {/* {React.cloneElement(props.children, {...props})} */}
        {/* {React.cloneElement(props.children, {sobrenome: props.sobrenome, sexo: props.sexo})} */}
        {filhosComProps(props)}
    </div>