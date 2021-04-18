
import styled from "styled-components"

export const ModalDiv = styled.div`
    background-color: ${props => props.theme.backgroundColor};  //rgba(0,0,0, .85);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: ${(props) => props.open ? "flex" : "none"};
    justify-content: center;
    align-items: center;
`;

export const ModalDialog = styled.div`
    background: #fbfbfb;
    //400px
    width:  ${props => props.theme.width};
    //150px
    height: ${props => props.theme.height};
    border-radius:1rem;
`;
export const ModalContent = styled.div`
    width:100%;
    display: flex;
    justify-content: space-evenly;
    margin:1rem 0.5rem;
`;

export const ModalTop = styled.div`
    display:flex;
    justify-content: space-between;
    background: #15dbff;
    width:100%;
    height:auto;
    padding:0.5rem 0rem;
    border-radius:1rem 1rem 0rem 0rem;
`;

export const TextTitle = styled.p`
   font-family:'Source Sans Pro', sans-serif;
   color: #ffffff;
   font-size:20px;
   margin: 0.5rem 1rem;
   line-height: 2rem; 
`
