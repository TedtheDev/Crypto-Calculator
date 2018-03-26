import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

import AddedCurrency from '../components/added_currency';

class AddedCurrencyContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {amountOwned: 0};

        this.onChangeAmountOwned = this.onChangeAmountOwned.bind(this);
    }

    onChangeAmountOwned(event) {
        if(!isNaN(event.target.value)) {
            this.setState({amountOwned: Number(event.target.value)});
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