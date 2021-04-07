import React from "react";
import {
    Row,
    Column,
    Grid
} from "../history/historyStyled";

const dataFilters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export function History() {
    return (
        <section>
            <Grid>
                <Row>
                    <Column size={1} collapse="xs">Id</Column>
                    <Column size={1} collapse="xs">Product</Column>
                    <Column size={1} collapse="xs">Category</Column>
                    <Column size={1} collapse="xs">Cost</Column>
                </Row>
                {dataFilters.map((item, index) => {
                    return (
                        <div key={index}>
                            <Row>
                                <Column size={1} collapse="xs">123456678</Column>
                                <Column size={1} collapse="xs">Computador Lenovo</Column>
                                <Column size={1} collapse="xs">Tecnología</Column>
                                <Column size={1} collapse="xs">2.500.000</Column>
                            </Row>

                        </div>
                    );
                })}
            </Grid>

        </section>
    )
}