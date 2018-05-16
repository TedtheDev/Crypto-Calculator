import React from 'react';
import { Input, Button, Icon } from 'semantic-ui-react';

const AddedCurrency = ({coin, amountOwned, onChangeAmountOwned, removeCoin}) => {

    // coin price in USD multiply amount owned to get totalAmountOwned in USD per coin
    const totalAmountOwnedUSD = Number(coin.price_usd) * Number(amountOwned);
    // convert price_usd to a nice dollar value that is rounded
    const coinPriceUSD = Number(coin.price_usd).toLocaleString('en', { style: 'currency', currency: 'USD'});

    return [
        <div key={coin.name}>{coin.name}</div>,
        <Input key={`${coin.name}-amount`} placeholder="Enter Amount Owned" onChange={onChangeAmountOwned} value={amountOwned.toString()}></Input>,
        <div key={`${coin.name}-price`}>{coinPriceUSD}</div>,
        <div key={`${coin.name}-total`}>{totalAmountOwnedUSD.toLocaleString('en', { style: 'currency', currency: 'USD'})}</div>,
        <div key={`${coin.name}-remove`}>
            <Button animated="fade" onClick={() => removeCoin(coin.id, Number(coin.price_usd) * Number(amountOwned))}>
                <Button.Content visible>Remove</Button.Content>
                <Button.Content hidden>
                    <Icon name='delete' />
                </Button.Content>
            </Button>
        </div>
    ]
};

export default AddedCurrency;