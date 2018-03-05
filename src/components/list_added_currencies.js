import React from 'react';
import styled from 'styled-components';

import AddedCurrency from './added_currency';

const AddedCurrenciesListDiv = styled.div`
    grid-area: addedCurrencies;
    display: grid;
    grid-template: auto / 1fr 1fr 1fr 1fr 1fr;
`;

const renderCoinsList = (coins) => {
    return (
        coins.map((coin, index) => <AddedCurrency key={index} coin={coin} />)
    )
};

const AddedCurrenciesList = ({addedCoins}) => {
    return(
        <AddedCurrenciesListDiv>
            {addedCoins && renderCoinsList(addedCoins)}
        </AddedCurrenciesListDiv>
    )
}

export default AddedCurrenciesList;