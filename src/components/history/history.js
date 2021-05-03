import React, { useContext, useState, useEffect } from "react";
import { AppContext } from '../../context/appConext';
import {
    Row,
    Column,
    Grid,
    Principal
} from "../history/historyStyled";
import {
    CardWrapper,
    CardBody,
    CardTittleH3,
    CardTittleH4,
    CardImage,
    CardLine,
    CardImageDiv,
} from '../card/cardStyled'


export function History() {
    const {pagination } = useContext(AppContext);
    const [queryMatch, setQueryMatch] = useState({
        matches: window.innerWidth > 768 ? true : false,
    });

    useEffect(() => {
        window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
            let matches = e.matches;
            setQueryMatch({ ...queryMatch, matches })
        })
    });

    return (
        <section>
            { 
                queryMatch.matches ?
                    <Grid>
                        <Row backgroungColor={"#7de1fa"}>
                            <Column size={1} collapse="xs">Id</Column>
                            <Column size={1} collapse="xs">Product</Column>
                            <Column size={1} collapse="xs">Category</Column>
                            <Column size={1} collapse="xs">Cost</Column>
                        </Row>


                        {pagination.currentData.map((item, index) => {
                            return (
                                <Principal key={index}>
                                    <Row >
                                        <Column size={1} collapse="xs">{item.productId}</Column>
                                        <Column size={1} collapse="xs">{item.name}</Column>
                                        <Column size={1} collapse="xs">{item.category}</Column>
                                        <Column size={1} collapse="xs">{item.cost}</Column>
                                    </Row>

                                </Principal>
                            );
                        })}
                    </Grid> :
                    <CardWrapper>
                        {pagination.currentData.map((item, index) => {
                            return (
                                <CardBody>
                                    <CardImageDiv>
                                        <CardImage src={item.img.url} />
                                    </CardImageDiv>
                                    <CardLine />
                                    <CardTittleH3>{item.category}</CardTittleH3>
                                    <CardTittleH4>{item.name}</CardTittleH4>
                                    <CardTittleH4>{` Cost: ${item.cost}`}</CardTittleH4>
                                </CardBody>
                            );
                        })}
                    </CardWrapper>

                }
        </section>
    )
}