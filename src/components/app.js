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

        this.state = { coins: [], addedCoins: [] };

        this.addCurrency = this.addCurrency.bind(this);
        this.removeCurrency = this.removeCurrency.bind(this);
    }

    componentDidMount() {
        axios.get('https://api.coinmarketcap.com/v1/ticker/')
        .then((response) => {
            const coins = response.data.map((coin) => {
                return {name: coin.name, id: coin.id, price_usd: coin.price_usd};
            });

            this.setState({coins})
        })
        .catch((err) => console.log(err));
    }

    addCurrency(selectedCurrency) {
        const selectedCoin = this.state.coins.filter(coin => coin.id === selectedCurrency);
        const filteredCoins = this.state.coins.filter(coin => coin.id !== selectedCurrency);
        let addedCoins = this.state.addedCoins;
        addedCoins.push(selectedCoin[0])
        this.setState({ coins: filteredCoins, addedCoins: addedCoins});
    }

    removeCurrency(removeCurrency) {
        let coinToAddBackToList = this.state.addedCoins.filter(coin => coin.id === removeCurrency);
        let addedCoinsUpdate = this.state.addedCoins.filter(coin => coin.id !== removeCurrency)
        let updatedCoinList = this.state.coins;
        updatedCoinList.push(coinToAddBackToList[0]);
        this.setState({ coins: updatedCoinList, addedCoins: addedCoinsUpdate});
    }

    render() {
        const { coins } = this.state;

        return (
            <AppDiv>
                <Title>hello from crypto calculator</Title>
                <SelectCurrencyContainer coins={coins} addCurrency={this.addCurrency}/>
                <AddedCurrenciesListContainer addedCoins={this.state.addedCoins} removeCurrency={this.removeCurrency}/>
            </AppDiv>
        )
    }
};