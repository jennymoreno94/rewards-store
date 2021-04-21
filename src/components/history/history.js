import React, { useContext, useState } from "react";
import { AppContext } from '../../context/appConext';
import {
    Row,
    Column,
    Grid,
    Principal
} from "../history/historyStyled";

const dataFilters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export function History() {
    const { history,isHistory } = useContext(AppContext);
    const [listHistory, setListHistory] = useState(history);



    /* const groupBy = key => array =>
         array.reduce(
             (objectsByKeyValue, obj) => ({
                 ...objectsByKeyValue,
                 [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj)
             }),
             {}
         );*/

    //debugger;
    ///const groupByBrand = history.groupBy(history, "_id")

    //const groupByBrand = history.groupBy(history, "_id"); 
    //console.log(groupByBrand)
    console.log(isHistory);
    return (



        <section>
            
            { isHistory ? <Grid>
                <Row backgroungColor={"#7de1fa"}>
                    <Column size={1} collapse="xs">Id</Column>
                    <Column size={1} collapse="xs">Product</Column>
                    <Column size={1} collapse="xs">Category</Column>
                    <Column size={1} collapse="xs">Cost</Column>
                </Row>


                {history.map((item, index) => {
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
            </Grid> : null }
        </section>
    )
}