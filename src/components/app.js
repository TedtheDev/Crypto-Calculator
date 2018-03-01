import React from 'react';
import styled from 'styled-components';

import CoinDropDownContainer from '../containers/coin_drop_down_container';
import SelectCurrencyContainer from '../containers/select_currency_container';
import AddedCurrenciesListContainer from '../containers/list_added_currencies_container';

const AppDiv = styled.div`
    display: grid;
    grid-template: 15vh 10vh auto / 5vw auto 5vw;
    grid-template-areas:
        "nav nav nav"
        ". currencySelect ."
        ". addedCurrencies .";
`;

const Title = styled.h1`
    grid-area: nav;
    display: flex;
    justify-content: center;
`;

const App = () => {
    return (
        <AppDiv>
            <Title>hello from crypto calculator</Title>
            <SelectCurrencyContainer />
            <AddedCurrenciesListContainer />
        </AppDiv>
    )
};

export default App;