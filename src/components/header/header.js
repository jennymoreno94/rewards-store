import React, { useState, useEffect,useContext } from "react";
import {AppContext} from '../../context/appConext';
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
import { faPlusCircle, faHistory,faHome } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../transversal/buttonComponent/button'
import { History } from "../history/history";
import  postData from '../../utils/postMethods';


export function Header() {
    const { user,setIsHistory,isHistory} = useContext(AppContext);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [queryMatch, setQueryMatch] = useState({
        matches: window.innerWidth > 768 ? true : false,
    });

    const propsButton = {
        height: queryMatch.matches ? "40px" : "30px",
        backgroundColor: queryMatch.matches ? "#e9e7e7" : "#ffffff",
        padding: "0.2rem",
        borderRadius: "1rem",           
        margin: "0 0 0 0.2rem",
        cursor: "pointer",
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize : queryMatch.matches ? "25px" :"20px",
        marginText : "0 auto",
        paddingText: "0 0 0 0.5rem",
        lineHeight: queryMatch.matches ? "2rem" : "1.314rem"
    }

    const propsModal = {
        width: queryMatch.matches ? "400px" : "300px",
        height: "150px",
        backgroundColor: "rgba(0,0,0, .85)"
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

    const handleHistory = () => {
        setIsHistory(!isHistory)
    };

    const handleAddCoins = (coins) => {
        return postData.postPoints(coins);  
    };


    return (
        <HeaderWrapper>
            <HeaderLogo>
                <ImageLogo src={logo} alt="Logo" />
                <Modal
                    isOpenModal={isOpenModal}
                    setIsOpenModal={setIsOpenModal}
                    tittle={`Add Coins`}
                    propsModal={propsModal}
                >
                    <Button onClick={() => {handleAddCoins(1000)}} propsButton={{...propsButton, backgroundColor: "#e9e8e8" }} tittle={"1000"}>
                        <ImageCoin src={coin} alt="Coin" />
                    </Button>
                    <Button onClick={() => {handleAddCoins(5000)}} propsButton={{...propsButton, backgroundColor: "#e9e8e8" }} tittle={"5000"}>
                        <ImageCoin src={coin} alt="Coin" />
                    </Button>
                    <Button onClick={() => {handleAddCoins(7500)}} propsButton={{...propsButton, backgroundColor: "#e9e8e8"}} tittle={"7500"}>
                        <ImageCoin src={coin} alt="Coin" />
                    </Button>

                </Modal>
                <HeaderDiv>
                    <Button propsButton={propsButton}
                        onClick={handleChange} tittle={queryMatch.matches ? "AddCoins" : null}>
                        <FontAwesomeIcon icon={faPlusCircle} style={{ color: "#FFCF00", fontSize: "25px", padding: "0.2rem" }} />
                    </Button>
                    <Button propsButton={propsButton}
                        onClick={handleHistory} tittle={queryMatch.matches ? isHistory ? "Home" : "History": null}>
                        <FontAwesomeIcon icon={isHistory ? faHome :faHistory} style={{ color: "#FF8000", fontSize: "25px", padding: "0.2rem" }} />
                    </Button>
                    <UserName> {user.name} </UserName>
                    <Button propsButton={{ ...propsButton, backgroundColor: "#e9e7e7", cursor: "auto" }} tittle={user.points}>
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