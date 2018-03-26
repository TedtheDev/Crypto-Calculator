import React from 'react';
import { Input } from 'semantic-ui-react';

const AddedCurrency = ({coin, amountOwned, onChangeAmountOwned, removeCoin}) => {
    return [
        <div key={coin.name}>{coin.name}</div>,
        <Input key={`${coin.name}-amount`} placeholder="Enter Amount Owned" onChange={onChangeAmountOwned} value={amountOwned.toString()}></Input>,
        <div key={`${coin.name}-price`}>{coin.price_usd}</div>,
        <div key={`${coin.name}-=`}>=</div>,
        <div key={`${coin.name}-total`}><div>{Number(coin.price_usd) * Number(amountOwned)}</div><button onClick={() => removeCoin(coin.id)}>Remove</button></div>
    ]
};

export default AddedCurrency;