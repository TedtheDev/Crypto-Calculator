import React from 'react';
import styled from 'styled-components';

import AddedCurrencyContainer from '../containers/added_currency_container';
import TotalAmountOwnedContainer from '../containers/total_amount_owned_container';

const AddedCurrenciesListDiv = styled.div`
    display: grid;
    grid-template: 10% auto / 1fr;
    grid-template-areas: 
        "totalAmountOwned"
        "addedCurrencies";
`;

const AddedCurrenciesDiv = styled.div`
    grid-area: addedCurrencies;
    display: grid;
    grid-template: auto / 1fr 1fr 1fr 1fr 1fr;

`;

const renderCoinsList = (coins) => {
    return (
        <AddedCurrenciesDiv>
            <div>
                <strong>Coin Name</strong>
            </div>
            <div>
                <strong>Amount Owned (Coin Count)</strong>
            </div>
            <div>
                <strong>Price per Coin</strong>
            </div>
            <div></div>
            <div>
                <strong>Total Amount Owned Per Coin</strong>
            </div>
            {coins.map((coin, index) => <AddedCurrencyContainer key={coin.id} coin={coin} />)}
        </AddedCurrenciesDiv>
    )
};

const AddedCurrenciesList = ({addedCoins}) => {
    return(
        <AddedCurrenciesListDiv>
            {addedCoins.length > 0 && renderCoinsList(addedCoins)}
        </AddedCurrenciesListDiv>
    )
}

export default AddedCurrenciesList;