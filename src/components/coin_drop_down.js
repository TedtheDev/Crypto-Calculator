import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

function renderCoins(coins) {
    coins.sort();

    const coinOptions = coins.map((coin, index) => {
        return { key: index, value: coin.charAt(0).toUpperCase() + coin.slice(1), text: coin.charAt(0).toUpperCase() + coin.slice(1)}
    });
    
    console.log(coinOptions)
    return (
        <div>
            <Dropdown placeholder='Select Currency' fluid search selection options={coinOptions} />
        </div>
    )
};


const CoinDropDown = ({ coins }) => {
    return (
        renderCoins(coins)
    )
};


export default CoinDropDown;