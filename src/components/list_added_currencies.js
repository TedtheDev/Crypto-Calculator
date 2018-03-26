import React from 'react';
import styled from 'styled-components';

import AddedCurrencyContainer from '../containers/added_currency_container';

const AddedCurrenciesListDiv = styled.div`
    display: grid;
    grid-template: auto / 1fr 1fr 1fr 1fr 1fr;
`;

const renderCoinsList = (coins) => {
    return (
        coins.map((coin, index) => <AddedCurrencyContainer key={index} coin={coin} />)
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