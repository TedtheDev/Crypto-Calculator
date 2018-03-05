import React from 'react';
import { Input } from 'semantic-ui-react';

const AddedCurrency = ({coin}) => {
    return [
        <div>{coin.name}</div>,
        <Input placeholder="Enter Amount Owned"></Input>,
        <div>{coin.price_usd}</div>,
        <div>=</div>,
        <div>{coin.price_usd * 2}</div>
    ]
};

export default AddedCurrency