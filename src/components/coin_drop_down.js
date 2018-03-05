import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';

function renderCoins(coins, onChangeCoinDropDown) {
    // Sort currency name alphabetically
    coins.sort((a,b) => {
        a = a.name.toUpperCase();
        b = b.name.toUpperCase();
        if(a < b) {
            return -1
        } else if (a > b) {
            return 1
        }

        return 0;
    });

    const coinOptions = coins.map((coin, index) => {
        return { key: index, value: coin.id, text: coin.name}
    });
    
    return (
        <div>
            <Dropdown placeholder='Select Crypto' fluid multiple selection options={coinOptions} onChange={onChangeCoinDropDown}/>
        </div>
    )
};

const CoinDropDown = ({ coins, onChangeCoinDropDown }) => {
    return (
        renderCoins(coins, onChangeCoinDropDown)
    )
};

CoinDropDown.propTypes = {
    coins: PropTypes.array.isRequired
};

export default CoinDropDown;