import React, { Component } from 'react';
import AddedCurrency from '../components/added_currency';

export default class AddedCurrencyContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {amountOwned: 0};

        this.onChangeAmountOwned = this.onChangeAmountOwned.bind(this);
    }

    onChangeAmountOwned(event) {
        this.setState({amountOwned: event.target.value});
    }

    render() {
        return (
            <AddedCurrency 
                coin={this.props.coin} 
                amountOwned={this.state.amountOwned} 
                onChangeAmountOwned={this.onChangeAmountOwned} 
                removeCurrency={this.props.removeCurrency}
            />
        )
    }
}