
import styled from "styled-components"


export const ModalDiv = styled.div`
    background-color: rgba(0,0,0, .85);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: ${(props) => props.open ? "flex" : "none"};
    justify-content: center;
    align-items: center;
`;

export const ModalDialog = styled.div`
    background: #ddd;
    padding: 10px;
    width: 300px;
    height: 400px;
`;