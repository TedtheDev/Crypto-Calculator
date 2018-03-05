import React from 'react';
import { Input } from 'semantic-ui-react';

const AddedCurrency = ({coin, amountOwned, onChangeAmountOwned}) => {
    return [
        <div>{coin.name}</div>,
        <Input placeholder="Enter Amount Owned" onChange={onChangeAmountOwned} value={amountOwned.toString()}></Input>,
        <div>{coin.price_usd}</div>,
        <div>=</div>,
        <div>{Number(coin.price_usd) * Number(amountOwned)}</div>
    ]
};

export default AddedCurrency