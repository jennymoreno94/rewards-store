import React from 'react';
import {
    ModalDiv,
    ModalDialog
} from "../modal/modalStyled";

export function Modal(props) {
    
    const closeModal = () => {
        props.setIsOpenModal(false);
    }
    return (
        <section>

            <ModalDiv open={props.isOpenModal} >
                <ModalDialog >
                    <h1>{props.tittle}</h1>
                    {props.children}
                    <button open={props.isOpenModal} onClick={closeModal}>
                        Close Modal
                    </button>
                </ModalDialog>
            </ModalDiv>


        </section>
    );
}