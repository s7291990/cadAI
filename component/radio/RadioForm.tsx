import * as React from 'react';
import {} from "./styles";
import InputForm from "../input/InputForm";

import { RadioDataType } from "./type";

const RadioForm = ({label, variant, size, color, icon, arr} : RadioDataType) => {
    return (
        <>
            {
                arr && (
                    arr.map((el: {value:string, label:string}, index: any) =>> (
                        <input type="radio" key={ index } value={el.value} />
                    ))
                )
            }
        </>
    )
}

export  default RadioForm;