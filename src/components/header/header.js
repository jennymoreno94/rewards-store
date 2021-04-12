import React, { useState, useEffect } from "react";
import {
    HeaderWrapper,
    HeaderImage,
    HeaderTitle,
    HeaderLogo,
    HeaderDiv,
    ImageLogo,
    ImageCoin,
    ButtonCoin,
    TextButtonCoin,
    UserName,
    TextButton
} from "../header/headerStyled";
import logo from '../../assets/aerolab-logo.svg'
import coin from '../../assets/coin.svg'
import { Modal } from '../modal/modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faHistory } from '@fortawesome/free-solid-svg-icons'
//import { Button } from '../transversal/buttonComponent/buttonStyled'
import { Button } from '../transversal/buttonComponent/button'


export function Header() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [queryMatch, setQueryMatch] = useState({
        matches: window.innerWidth > 768 ? true : false,
    });

    const propsButton = {
        height: queryMatch.matches ? "40px" : "30px",
        backgroundColor: queryMatch.matches ? "#f8f8f8" : "#ffffff",
        padding: "0.2rem",
        borderRadius: "1rem",
        margin: "0.2rem",
        cursor: "pointer"
    }

    useEffect(() => {
        window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
            let matches = e.matches;
            setQueryMatch({ ...queryMatch, matches })
        })
    });


    const handleChange = () => {
        setIsOpenModal(true);
    };

    const handleChangetwo = () => {
        alert(JSON.stringify(propsButton))
    };

    return (
        <HeaderWrapper>
            <HeaderLogo>
                <ImageLogo src={logo} alt="Logo" />
                <Modal
                    isOpenModal={isOpenModal}
                    setIsOpenModal={setIsOpenModal}
                    tittle={`Add Coins ${isOpenModal}`}
                >

                    <button>1000</button>
                    <button>5000</button>
                    <button>7500</button>

                </Modal>

                <HeaderDiv>
                    <Button propsButton={propsButton}
                        onClick={handleChange} tittle={queryMatch.matches ? "AddCoins" : null}>
                        <FontAwesomeIcon icon={faPlusCircle} style={{ color: "#FFCF00", fontSize: "25px", padding: "0.2rem" }} />
                    </Button>
                    <Button propsButton={propsButton}
                        onClick={handleChangetwo} tittle={queryMatch.matches ? "History" : null}>
                        <FontAwesomeIcon icon={faHistory} style={{ color: "#FF8000", fontSize: "25px", padding: "0.2rem" }} />
                    </Button>
                    <UserName> Jenny Moreno Vallejo </UserName>
                    <Button propsButton={{ ...propsButton, backgroundColor: "#f8f8f8", cursor: "auto" }} tittle={"1000"}>
                        <ImageCoin src={coin} alt="Coin" />
                    </Button>
                </HeaderDiv>
            </HeaderLogo>
            <HeaderImage>
                <HeaderTitle> Electronics</HeaderTitle>
            </HeaderImage>
        </HeaderWrapper>
    )
}