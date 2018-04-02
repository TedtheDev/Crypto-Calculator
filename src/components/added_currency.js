import React from 'react';
import { Input } from 'semantic-ui-react';

const AddedCurrency = ({coin, amountOwned, onChangeAmountOwned, removeCoin}) => {
    const totalAmountOwnedUSD = Number(coin.price_usd) * Number(amountOwned);
    return [
        <div key={coin.name}>{coin.name}</div>,
        <Input key={`${coin.name}-amount`} placeholder="Enter Amount Owned" onChange={onChangeAmountOwned} value={amountOwned.toString()}></Input>,
        <div key={`${coin.name}-price`}>{coin.price_usd.toLocaleString('en', { style: 'currency', currency: 'USD'})}</div>,
        <div key={`${coin.name}-total`}>{totalAmountOwnedUSD.toLocaleString('en', { style: 'currency', currency: 'USD'})}</div>,
        <div key={`${coin.name}-remove`}><button onClick={() => removeCoin(coin.id, Number(coin.price_usd) * Number(amountOwned))}>Remove</button></div>
    ]
};

export default AddedCurrency;