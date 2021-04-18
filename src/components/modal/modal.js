import React, { useState, useEffect } from 'react';
import {
    ModalDiv,
    ModalDialog,
    ModalTop,
    TextTitle,
    ModalContent
} from "../modal/modalStyled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export function Modal(props) {

    const [queryMatch, setQueryMatch] = useState({
        matches: window.innerWidth > 768 ? true : false,
    });

    useEffect(() => {
        window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
            let matches = e.matches;
            setQueryMatch({ ...queryMatch, matches })
        })
    });
    const closeModal = () => {
        props.setIsOpenModal(false);
    }
    
    return (
        <section>

            <ModalDiv theme={props.propsModal} open={props.isOpenModal} >
                <ModalDialog theme={props.propsModal} >
                    <ModalTop>
                        <TextTitle>{props.tittle}</TextTitle>
                        <FontAwesomeIcon open={props.isOpenModal} onClick={closeModal} icon={faTimesCircle} style={{ color: "#ffffff", fontSize: "30px", margin: "0.5rem 1rem", cursor: "pointer" }} />
                    </ModalTop>
                    <ModalContent> {props.children} </ModalContent>
                </ModalDialog>
            </ModalDiv>


        </section>
    );
}