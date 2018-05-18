import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { Button } from 'semantic-ui-react';

import CoinDropDownContainer from './../CoinDropDownContainer/coin_drop_down_container';

const SelectCurrencyDiv = styled.div`
    grid-area: currencySelect;
    display: grid;
    grid-template: auto / repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 5%;
    align-items: center;
`;

class SelectCurrencyContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { selectedCurrency: []};

        this.onChangeCoinDropDown = this.onChangeCoinDropDown.bind(this);
    }

    onChangeCoinDropDown(event, data) {
        this.setState({selectedCurrency: data.value});
    }

    render() {
        return (
            <SelectCurrencyDiv>
                <CoinDropDownContainer coins={this.props.coins} onChangeCoinDropDown={this.onChangeCoinDropDown} />
                <Button primary type="button" onClick={() => this.props.addCoins(this.state.selectedCurrency)}>Add</Button>
            </SelectCurrencyDiv>
        )
    }
}

export default connect(null, actions)(SelectCurrencyContainer);