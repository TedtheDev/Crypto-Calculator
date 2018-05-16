import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

import styled from 'styled-components';
import axios from 'axios';

import CoinDropDownContainer from '../../containers/CoinDropDownContainer/coin_drop_down_container';
import SelectCurrencyContainer from '../../containers/SelectCurrencyContainer/select_currency_container';
import AddedCurrenciesListContainer from '../../containers/AddedCurrenciesListContainer/added_currencies_list_container';
import OverallPortfolioStatsContainer from '../../containers/OverallPortfolioStatsContainer/overall_portfolio_stats_container';

const AppDiv = styled.div`
    display: grid;
    grid-template: 10vh 10vh 5vh 65vh / 5vw auto 5vw;
    grid-template-areas:
        "nav nav nav"
        ". currencySelect ."
        ". overallPortfolioStats ."
        ". addedCurrencies .";
`;

const Title = styled.h1`
    grid-area: nav;
    display: flex;
    justify-content: center;
    align-items: center;
`;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { coins: [], addedCoins: [] };
    }

    componentDidMount() {
        this.props.fetchCoins();
    }

    render() {
        return (
            <AppDiv>
                <Title>hello from crypto calculator</Title>
                <SelectCurrencyContainer />
                <OverallPortfolioStatsContainer />
                <AddedCurrenciesListContainer />
            </AppDiv>
        )
    }
};

export default connect(null, actions)(App);