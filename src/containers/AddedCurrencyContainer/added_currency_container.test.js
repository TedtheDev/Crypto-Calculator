import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddedCurrencyCointainer from './added_currency_container';

Enzyme.configure({ adapter: new Adapter() });

describe('<AddedCurrencyContainer />', () => {
    const coin = { id: 'btc', name:'Bitcoin', price_usd: 100 };
    const initialState = {coins: [], addedCoins: [coin]};
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(<AddedCurrencyCointainer coin={coin} store={store}/>);
    });
    
    test.skip('can update the amountOwned value when onChange is called', () => {
       console.log(wrapper);
        expect(wrapper.state().amountOwned).toBe(0);
        expect(wrapper.find('.ui .input input').props().value).toBe('0');
        // change input from 0 to 2
        wrapper.find('.ui .input input').simulate('change', { target: { value:2 } });
        expect(wrapper.find('.ui .input input').props().value).toBe('2');
        expect(wrapper.state().amountOwned).toBe(2);
    });

    test.skip('can update total on amount owned change event', () => {
        console.log(wrapper.find('.ui .input input').change)
        expect(wrapper.find('div').at(4).children().at(0).text()).toBe('$0.00')
        wrapper.find('.ui .input input').simulate('change', { event: {target: { defaultValue: 0, value: 2 } }});
        expect(wrapper.find('div').at(4).children().at(0).text()).toBe('$200.00');
    })
});