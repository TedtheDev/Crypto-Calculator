import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { coins: [] };
    }

    componentDidMount() {
        axios.get('https://api.coinmarketcap.com/v1/ticker/')
        .then((response) => {
            const coins = response.data.map((coin) => {
                return {name: coin.name, id: coin.id};
            });

            this.setState({coins})
        })
        .catch((err) => console.log(err));
    }

    render() {
        const { coins } = this.state;

        return (
            <AppDiv>
                <Title>hello from crypto calculator</Title>
                <SelectCurrencyContainer coins={coins} />
                <AddedCurrenciesListContainer />
            </AppDiv>
        )
    }
};