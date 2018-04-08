import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import styled from 'styled-components';

import TotalAmountOwned from '../components/total_amount_owned';
import TotalAmountInvested from '../components/total_amount_invested';
import TotalNetProfit from '../components/total_net_profit';

const StatsDiv = styled.div`
    grid-area: overallPortfolioStats;
    display: grid;
    grid-template: 100% / 1fr 1fr 1fr;
`;

class OverallPortfolioStatsContainer extends Component {

    constructor(props) {
        super(props);

        this.onChangeUpdateTotalAmountInvested = this.onChangeUpdateTotalAmountInvested.bind(this);
    }

    onChangeUpdateTotalAmountInvested(event) {
        if(!isNaN(event.target.value)) {
            this.props.updateTotalAmountInvested(event.target.value);
        }
    }

    render() {
        if(this.props.coins.addedCoins.length > 0) {
            return (
                <StatsDiv>
                    <TotalAmountInvested 
                        totalAmountInvestedUSD={this.props.totalAmountInvestedUSD} 
                        onChangeUpdateTotalAmountInvested={this.onChangeUpdateTotalAmountInvested} 
                    />
                    <TotalAmountOwned 
                        total={this.props.totalAmountOwnedUSD} 
                    />
                    <TotalNetProfit 
                        netProfit={this.props.totalAmountOwnedUSD - this.props.totalAmountInvestedUSD}
                    />
                </StatsDiv>
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
        totalAmountInvestedUSD: state.coins.totalAmountInvestedUSD,
        coins: state.coins
    }
}
export default connect(mapStateToProps, actions)(OverallPortfolioStatsContainer);