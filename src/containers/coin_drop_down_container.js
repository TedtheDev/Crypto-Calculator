import React, { component, Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import CoinDropDown from '../components/coin_drop_down';

const Wrapper = styled.div`

`;

class CoinDropDownContainer extends Component {
    render() {
        return (
            <Wrapper>
                <CoinDropDown coins={this.props.coins}/>
            </Wrapper>
        )
    }
};

export default CoinDropDownContainer;