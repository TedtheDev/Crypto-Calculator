import React, { component, Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import CoinDropDown from '../components/coin_drop_down';

const Wrapper = styled.div`
    grid-area: content;
`;

class CoinDropDownContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { coins: [] };
    }
    
    componentDidMount() {
        axios.get('https://api.coinmarketcap.com/v1/ticker/')
            .then((response) => {
                const coins = response.data.map((coin) => {
                    return {name: coin.name, id: coin.id};
                });

                this.setState({coins})
            })
            .catch((err) => console.log(err));
    }
    
    render() {

        const { coins } = this.state;

        return (
            <Wrapper>
                <CoinDropDown coins={coins}/>
            </Wrapper>
        )
    }
};

export default CoinDropDownContainer;