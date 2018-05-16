import React, { Component } from 'react';
import { connect } from 'react-redux';

import SavePortfolioData from '../../components/SavePortfolioData/save_portfolio_data';

class SavePortfolioDataContainer extends Component {
    constructor(props) {
        super(props);

        this.onClickSaveData = this.onClickSaveData.bind(this);
        this.onClickClearData = this.onClickClearData.bind(this);
    }

    onClickSaveData() {
        const { addedCoins, totalAmountInvestedUSD } = this.props.coins;
        let data = { addedCoins, totalAmountInvestedUSD }
        data = JSON.stringify(data);
        localStorage.setItem('crypto-calc-data', data);
    }

    onClickClearData() {
        localStorage.clear('crypto-calc-data');
    }

    render() {
        return (
            <SavePortfolioData 
                onClickSaveData={this.onClickSaveData} 
                onClickClearData={this.onClickClearData}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        coins: state.coins
    }
};

export default connect(mapStateToProps)(SavePortfolioDataContainer)