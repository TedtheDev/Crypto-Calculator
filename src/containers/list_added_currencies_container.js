import React, { Component } from 'react';
import AddedCurrenciesList from '../components/list_added_currencies';

export default class AddedCurrenciesListContainer extends Component {
    render() {
        return (
            <AddedCurrenciesList addedCoins={this.props.addedCoins}/>
        )
    }
}