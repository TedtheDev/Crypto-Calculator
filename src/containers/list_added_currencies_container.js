import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import AddedCurrenciesList from '../components/list_added_currencies';

const AddedCurrenciesListContainerDiv = styled.div`
    grid-area: addedCurrencies;
`;

class AddedCurrenciesListContainer extends Component {
    render() {
        return (
            <AddedCurrenciesListContainerDiv>
                <AddedCurrenciesList addedCoins={this.props.coins.addedCoins} />
            </AddedCurrenciesListContainerDiv>
        )
    }
}

function mapStateToProps(state) {
    return {
        coins: state.coins
    }
}
export default connect(mapStateToProps)(AddedCurrenciesListContainer);