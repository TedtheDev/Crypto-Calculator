import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddedCurrency from '../src/components/added_currency';

Enzyme.configure({ adapter: new Adapter() });

describe('<AddedCurrency />', () => {
    test('can update the total value based on amount owned', () => {
        const addedCurrency = mount(
            <AddedCurrency 
                coin={{id: 'btc', name:'Bitcoin', price_usd: 100}}
                amountOwned={1}
                onChangeAmountOwned={() => {}}
                removeCurrency={() => {}}
            />
        );
        console.log(addedCurrency.children().at(4).text());
        expect(addedCurrency.children().at(0).text()).toEqual('Bitcoin');
        expect(addedCurrency.find('.ui .input input').props().value).toEqual('1');
        expect(addedCurrency.children().at(4).text()).toEqual(''+ (100 * 1));
        expect(addedCurrency.children().length).toBe(5);
    })
});