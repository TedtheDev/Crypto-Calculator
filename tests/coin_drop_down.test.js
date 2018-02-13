import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CoinDropDown from '../src/components/coin_drop_down';

Enzyme.configure({ adapter: new Adapter() });

describe('Coin Drop Down', () => {
    const coins = [{name: 'Coin 1', id: 'coin1'},{name: 'Coin 2', id: 'coin2'}];
    
    test('has placeholder "Select Crypto on load"', () => {
        const coinDropDown = mount(<CoinDropDown coins={coins} />);
        expect(coinDropDown.find('.default .text').text()).toEqual('Select Crypto');
    });

    test('loaded coin options in drop down menu before click', () => {
        const coinDropDown = mount(<CoinDropDown coins={coins} />);
        const coinOptions = coinDropDown.find('.menu.transition div.item').children();
        expect(coinOptions.at(0).text()).toEqual(coins[0].name);
        expect(coinOptions.at(1).text()).toEqual(coins[1].name);
    });



})