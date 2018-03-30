import React, { Component } from 'react';
import { connect } from 'react-redux';

import TotalAmountOwned from '../components/total_amount_owned';

class TotalAmountOwnedContainer extends Component {
    render() {
        return (
            <TotalAmountOwned total={this.props.totalAmountOwnedUSD} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        totalAmountOwnedUSD: state.coins.totalAmountOwnedUSD
    }
}
export default connect(mapStateToProps)(TotalAmountOwnedContainer);