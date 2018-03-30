import React from 'react';
import styled from 'styled-components';

const TotalAmountOwnedDiv = styled.div`
    grid-area: totalAmountOwned;
`;

const TotalAmountOwned = (props) => {
    return (
        <TotalAmountOwnedDiv>Total Amount Owned: {props.total.toLocaleString('en', { style: 'currency', currency: 'USD'})}</TotalAmountOwnedDiv>
    )
}

export default TotalAmountOwned;