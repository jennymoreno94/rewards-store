import React, { useState, useEffect, useContext } from "react";
import { AppContext } from '../../context/appConext';
import {
    HeaderWrapper,
    HeaderImage,
    HeaderTitle,
    HeaderLogo,
    HeaderDiv,
    ImageLogo,
    ImageCoin,
    UserName,
    propsGeneralButton,
    propsGeneralModal,
    propsButtonCoins,
    propsButtonUser,
    propsIconButton,
    propsMenuButtons
} from "../header/headerStyled";
import logo from '../../assets/aerolab-logo.svg'
import coin from '../../assets/coin.svg'
import { Modal } from '../modal/modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faHistory, faHome } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../transversal/buttonComponent/button'
import postData from '../../utils/postMethods';
import getData from '../../utils/getMethods';
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";
import {ConstHeader,MediaQuery} from '../../utils/constants'

export function Header() {
    let history = useHistory();
    const { user, setIsHistory, isHistory, setUser,pagination } = useContext(AppContext);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [queryMatch, setQueryMatch] = useState({
        matches: window.innerWidth > 768 ? true : false,
    });
    const propsButton = propsGeneralButton(queryMatch.matches);
    const propsModal = propsGeneralModal(queryMatch.matches);

    useEffect(() => {
        window.matchMedia(MediaQuery.tablet).addEventListener("change", (e) => {
            let matches = e.matches;
            setQueryMatch({ ...queryMatch, matches })
        })
    });

    const handleChange = () => {
        setIsOpenModal(true);
    };

    const handleHistory = () => {
        let link = !isHistory
        history.push(link ? ConstHeader.linkHistory : ConstHeader.linkStore);
        setIsHistory(link)
        pagination.setCurrentPage(1)
    };

    const handleAddCoins = (coins) => {
        postData.postPoints(coins).then(function (myJson) {
            setIsOpenModal(false)
            getData.getUser()
                .then(response => {
                    setUser(response);
                    return swal(
                        'Good job!',
                        `${myJson.message}`,
                        'success'
                    )
                });
        });
    };

    return (
        <section>
            <HeaderWrapper>
                <HeaderLogo>
                    <ImageLogo src={logo}/>
                    <Modal
                        isOpenModal={isOpenModal}
                        setIsOpenModal={setIsOpenModal}
                        tittle={ConstHeader.addCoins}
                        propsModal={propsModal}
                    >
                        <Button onClick={() => { handleAddCoins(1000) }} propsButton={{ ...propsButton, ...propsButtonCoins }} tittle={ConstHeader.onethousand}>
                            <ImageCoin src={coin}/>
                        </Button>
                        <Button onClick={() => { handleAddCoins(5000) }} propsButton={{ ...propsButton, ...propsButtonCoins }} tittle={ConstHeader.fivethousand}>
                            <ImageCoin src={coin}/>
                        </Button>
                        <Button onClick={() => { handleAddCoins(7500) }} propsButton={{ ...propsButton, ...propsButtonCoins }} tittle={ConstHeader.seventhousand}>
                            <ImageCoin src={coin}/>
                        </Button>

                    </Modal>
                    <HeaderDiv>
                        <Button propsButton={{...propsButton,...propsMenuButtons(queryMatch.matches)}}
                            onClick={handleChange} tittle={queryMatch.matches ? ConstHeader.addCoins : null}>
                            <FontAwesomeIcon icon={faPlusCircle} style={propsIconButton(true)} />
                        </Button>
                        <Button propsButton={{...propsButton,...propsMenuButtons(queryMatch.matches)}}
                            onClick={handleHistory} tittle={queryMatch.matches ? isHistory ? ConstHeader.home : ConstHeader.history : null}>
                            <FontAwesomeIcon icon={isHistory ? faHome : faHistory} style={propsIconButton(false)} />
                        </Button>
                        <UserName> {user.name} </UserName>
                        <Button propsButton={{ ...propsButton, ...propsButtonUser}} tittle={user.points}>
                            <ImageCoin src={coin} />
                        </Button>
                    </HeaderDiv>
                </HeaderLogo>
                <HeaderImage>
                    <HeaderTitle> {isHistory ? ConstHeader.history : ConstHeader.store}</HeaderTitle>
                </HeaderImage>
            </HeaderWrapper>
        </section >
    )
}