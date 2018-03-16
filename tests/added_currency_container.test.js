import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddedCurrencyCointainer from '../src/containers/added_currency_container';

Enzyme.configure({ adapter: new Adapter() });

describe('<AddedCurrencyContainer />', () => {

    const coin = { id: 'btc', name:'Bitcoin', price_usd: 100 };
    test('can update the amountOwned value when onChange is called', () => {
        const wrapper = mount(
            <AddedCurrencyCointainer 
                coin={coin}
                removeCurrency={() => {}}
            />
        );

        expect(wrapper.state().amountOwned).toBe(0);
        expect(wrapper.find('.ui .input input').props().value).toBe('0');
        // change input from 0 to 2
        wrapper.find('.ui .input input').simulate('change', { target: { value:2 } });
        expect(wrapper.find('.ui .input input').props().value).toBe('2');
        expect(wrapper.state().amountOwned).toBe(2);
    });

    test('can update total on amount owned change event', () => {
        const wrapper = mount(
            <AddedCurrencyCointainer 
                coin={coin}
                removeCurrency={() => {}}
            />
        );
        
        expect(wrapper.find('div').at(4).children().at(0).text()).toBe('0')
        wrapper.find('.ui .input input').simulate('change', { target: { value:2 } });
        expect(wrapper.find('div').at(4).children().at(0).text()).toBe('200');
    })
});