import React from 'react';
import styled from 'styled-components';

const TotalNetProfit = ({netProfit}) => {
    
    const NetProfitDiv = styled.div`
        color: ${ netProfit < 0 ? `red` : `green` };
    `;

    return (
        <div>Net Profit: <NetProfitDiv>{Number(netProfit).toLocaleString('en', { style: 'currency', currency: 'USD'})}</NetProfitDiv></div>
    )
};

export default TotalNetProfit;