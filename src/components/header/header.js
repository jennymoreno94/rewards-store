import React, { useState } from "react";
import {
    HeaderWrapper,
    HeaderImage,
    HeaderTitle,
    HeaderLogo,
    HeaderUserCoin,
    ImageLogo,
    ImageCoin,
    ButtonCoin,
    TextButtonCoin,
    UserName
} from "../header/headerStyled";
import logo from '../../assets/aerolab-logo.svg'
import coin from '../../assets/coin.svg'
import { Modal } from '../modal/modal'

export function Header() {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleChange = () => {
        setIsOpenModal(true);
        alert(isOpenModal)
        /*return (
            <Modal/>
        );*/
    };


    return (
        <HeaderWrapper>
            <HeaderLogo>
                <ImageLogo src={logo} alt="Logo" />
                <ButtonCoin>
                    <TextButtonCoin>+</TextButtonCoin>
                    <ImageCoin src={coin} alt="Coin" onClick={handleChange} />
                </ButtonCoin>
                <Modal
                    isOpenModal={isOpenModal}
                    setIsOpenModal={setIsOpenModal}
                    tittle={"Add Coins"}
                >

                    <button>1000</button>
                    <button>5000</button>
                    <button>7500</button>

                </Modal>
                <HeaderUserCoin>
                    <UserName> Jenny Moreno Vallejo </UserName>
                    <ButtonCoin>
                        <TextButtonCoin>1000</TextButtonCoin>
                        <ImageCoin src={coin} alt="Coin" />
                    </ButtonCoin>
                </HeaderUserCoin>
            </HeaderLogo>
            <HeaderImage>
                <HeaderTitle> Electronics</HeaderTitle>
            </HeaderImage>
        </HeaderWrapper>
    )
}