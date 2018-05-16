import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

import AddedCurrency from '../../components/AddedCurrency/added_currency';

class AddedCurrencyContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {amountOwned: 0};

        this.onChangeAmountOwned = this.onChangeAmountOwned.bind(this);
    }

    onChangeAmountOwned(event) {
        if(!isNaN(event.target.value)) {
            const previousValue = (event.target.defaultValue || Number(event.target.defaultValue)) * Number(this.props.coin.price_usd);
            const updatedValue = Number(event.target.value) * Number(this.props.coin.price_usd);
            this.props.updateTotalAmountOwnedUSD(previousValue, updatedValue);
            this.setState({amountOwned: event.target.value});
        }
    }

    render() {
        return (
            <AddedCurrency
                coin={this.props.coin} 
                amountOwned={this.state.amountOwned} 
                onChangeAmountOwned={this.onChangeAmountOwned} 
                removeCoin={this.props.removeCoin}
            />
        )
    }
}

export default connect(null,actions)(AddedCurrencyContainer);