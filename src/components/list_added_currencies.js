import React from 'react';
import styled from 'styled-components';

import AddedCurrencyContainer from '../containers/added_currency_container';

const AddedCurrenciesListDiv = styled.div`
    grid-area: addedCurrencies;
    display: grid;
    grid-template: auto / 1fr 1fr 1fr 1fr 1fr;
`;

const renderCoinsList = (coins, removeCurrency) => {
    return (
        coins.map((coin, index) => <AddedCurrencyContainer key={index} coin={coin} removeCurrency={removeCurrency} />)
    )
};

const AddedCurrenciesList = ({addedCoins, removeCurrency}) => {
    return(
        <AddedCurrenciesListDiv>
            {addedCoins && renderCoinsList(addedCoins, removeCurrency)}
        </AddedCurrenciesListDiv>
    )
}

export default AddedCurrenciesList;