import React from 'react';
import CoinDropDown from '../../src/components/coin_drop_down';
import renderer from 'react-test-renderer';

test('Coin Drop Down renders correctly', () => {
    const component = renderer.create(
        <CoinDropDown coins={[{name: 'Coin 1', id: 'coin1'},{name: 'Coin 2', id: 'coin2'}]}/>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});