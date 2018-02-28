import React from 'react';
import CoinDropDownContainer from '../containers/coin_drop_down_container';
import styled from 'styled-components';

const AppDiv = styled.div`
    display: grid;
    grid-template: 15vh auto / 5vw auto 5vw;
    grid-template-areas:
        "nav nav nav"
        ". content .";
`;

const Title = styled.h1`
    grid-area: nav;
    display: flex;
    justify-content: center;
`;

const App = () => {
    return (
        <AppDiv>
            <Title>hello from crypto calculator</Title>
            <CoinDropDownContainer />
        </AppDiv>
    )
};

export default App;