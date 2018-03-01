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
    render() {
        return (
            <SelectCurrencyDiv>
                <CoinDropDownContainer coins={this.props.coins} />
                <Button primary type="button" >Add</Button>
            </SelectCurrencyDiv>
        )
    }
}