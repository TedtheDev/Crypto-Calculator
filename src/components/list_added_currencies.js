import React from 'react';
import styled from 'styled-components';
import { Input } from 'semantic-ui-react';

const AddedCurrenciesListDiv = styled.div`
    grid-area: addedCurrencies;
    display: grid;
    grid-template: auto / 1fr 1fr 1fr 1fr 1fr;
`;

const AddedCurrenciesList = (props) => {
    return(
        <AddedCurrenciesListDiv>
            <div>Currency Name</div>
            <Input placeholder="Enter Amount Owned"></Input>
            <div>Price</div>
            <div>=</div>
            <div>Total</div>
        </AddedCurrenciesListDiv>
    )
}

export default AddedCurrenciesList;