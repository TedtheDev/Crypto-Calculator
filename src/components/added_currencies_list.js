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
        coins.map((coin, index) => <AddedCurrencyContainer key={coin.id} coin={coin} />)
    )
};

const AddedCurrenciesList = ({addedCoins}) => {
    return(
        <AddedCurrenciesListDiv>
            {addedCoins.length > 0 && <TotalAmountOwnedContainer />}
            {addedCoins.length > 0 && <AddedCurrenciesDiv>{renderCoinsList(addedCoins)}</AddedCurrenciesDiv>}
        </AddedCurrenciesListDiv>
    )
}

export default AddedCurrenciesList;