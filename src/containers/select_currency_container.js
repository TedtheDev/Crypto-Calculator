import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

import CoinDropDownContainer from './coin_drop_down_container';

const SelectCurrencyDiv = styled.div`
    grid-area: currencySelect;
    display: grid;
    grid-template: auto / 80% 20%;
    align-items: center;
`;

export default class SelectCurrencyContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { selectedCurrency: ''};

        this.onChangeCoinDropDown = this.onChangeCoinDropDown.bind(this);
    }

    onChangeCoinDropDown(event, data) {
        this.setState({selectedCurrency: data.value});
    }

    render() {
        return (
            <SelectCurrencyDiv>
                <CoinDropDownContainer coins={this.props.coins} onChangeCoinDropDown={this.onChangeCoinDropDown} />
                <Button primary type="button" onClick={() => this.props.addCurrency(this.state.selectedCurrency)}>Add</Button>
            </SelectCurrencyDiv>
        )
    }
}