import * as React from 'react';
import {} from "./styles";

interface  Props {
    label?:string,
    variant?: any,
    size?:any,
    color?: string,
    icon?: string,
    onFocus? : () => void,
}

const InputForm = ({label, variant, size, color, icon, onFocus} : Props) => {
    return (
        <input
            type="text"
        >
    )
}

export  default InputForm;