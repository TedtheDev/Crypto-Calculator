import React from 'react';
import AddedCurrency from '../../src/components/added_currency';
import renderer from 'react-test-renderer'

test('<AddedCurrency /> renders correctly', () => {
    const component = renderer.create(
        <AddedCurrency 
            coin={{id: 'btc', name: 'Bitcoin', price_usd: 100}}
            amountOwned={5}
            onChangeAmountOwned={() => {}}
            removeCurrency={() => {}}
        />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot;
})