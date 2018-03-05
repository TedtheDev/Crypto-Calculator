import React from 'react';
import { Input } from 'semantic-ui-react';

const AddedCurrency = ({coin, amountOwned, onChangeAmountOwned, removeCurrency}) => {
    return [
        <div key={coin.name}>{coin.name}</div>,
        <Input key={`${coin.name}-amount`} placeholder="Enter Amount Owned" onChange={onChangeAmountOwned} value={amountOwned.toString()}></Input>,
        <div key={`${coin.name}-price`}>{coin.price_usd}</div>,
        <div key={`${coin.name}-=`}>=</div>,
        <div key={`${coin.name}-total`}>{Number(coin.price_usd) * Number(amountOwned)}<button onClick={() => removeCurrency(coin.id)}>Remove</button></div>
    ]
};

export default AddedCurrency