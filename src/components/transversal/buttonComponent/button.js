import React, { useState } from "react";
import {
    MyButton,
    TextButton
} from '../buttonComponent/buttonStyled'

export function Button(props) {
   
    return (
        <MyButton onClick={props.onClick}
            theme={props.propsButton}
        >
            <TextButton>{props.tittle}</TextButton>
            {props.children}
        </MyButton>
        
    );
}
