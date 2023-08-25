import * as React from 'react';
import {} from "./styles";
import InputForm from "../input/InputForm";

interface  Props {
    label?:string,
    variant?: any,
    size?:any,
    color?: string,
    icon?: string,
}

const BaseButton = ({label, variant, size, color, icon} : Props) => {
    return (
        <button type="button" className={ variant ? variant : ''}>
            {label}
            {icon === 'search' && (
                <img src="" />
            )}
        </button>
    )
}

export  default InputForm;