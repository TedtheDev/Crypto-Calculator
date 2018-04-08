import React from 'react';

const TotalNetProfit = ({netProfit}) => {
    return (
        <div>Net Profit: {Number(netProfit).toLocaleString('en', { style: 'currency', currency: 'USD'})}</div>
    )
};

export default TotalNetProfit;