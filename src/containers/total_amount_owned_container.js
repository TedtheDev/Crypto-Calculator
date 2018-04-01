import React, { Component } from 'react';
import { connect } from 'react-redux';

import TotalAmountOwned from '../components/total_amount_owned';

class TotalAmountOwnedContainer extends Component {
    render() {

        if(this.props.coins.addedCoins.length > 0) {
            return (
                <TotalAmountOwned total={this.props.totalAmountOwnedUSD} />
            )
        } else {
            return (
                null
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        totalAmountOwnedUSD: state.coins.totalAmountOwnedUSD,
        coins: state.coins
    }
}
export default connect(mapStateToProps)(TotalAmountOwnedContainer);