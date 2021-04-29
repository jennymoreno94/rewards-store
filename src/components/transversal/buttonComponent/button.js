import React from "react";
import {
    MyButton,
    TextButton
} from '../buttonComponent/buttonStyled'

export function Button(props) {
   
    return (
        <MyButton disabled={props.disabled} onClick={props.onClick}
            theme={props.propsButton}
        >
            <TextButton theme={props.propsButton} >{props.tittle}</TextButton>
            {props.children}
        </MyButton>
        
    );
}
