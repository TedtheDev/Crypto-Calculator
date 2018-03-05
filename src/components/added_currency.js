import React from 'react';
import { Input } from 'semantic-ui-react';

const AddedCurrency = ({coin, amountOwned, onChangeAmountOwned, removeCurrency}) => {
    return [
        <div>{coin.name}</div>,
        <Input placeholder="Enter Amount Owned" onChange={onChangeAmountOwned} value={amountOwned.toString()}></Input>,
        <div>{coin.price_usd}</div>,
        <div>=</div>,
        <div>{Number(coin.price_usd) * Number(amountOwned)}<button onClick={() => removeCurrency(coin.id)}>Remove</button></div>
    ]
};

export default AddedCurrency