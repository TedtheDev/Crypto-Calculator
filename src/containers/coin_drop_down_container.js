import React, { component, Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import CoinDropDown from '../components/coin_drop_down';

const Wrapper = styled.div`

`;

class CoinDropDownContainer extends Component {

    render() {
        return (
            <Wrapper>
                <CoinDropDown coins={this.props.coins.coins} onChangeCoinDropDown={this.props.onChangeCoinDropDown} />
            </Wrapper>
        )
    }
};

function mapStateToProps(state) {
    return {
        coins: state.coins
    }
}
export default connect(mapStateToProps)(CoinDropDownContainer);