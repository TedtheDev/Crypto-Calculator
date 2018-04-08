import React from 'react';
import styled from 'styled-components';

const TotalAmountOwnedDiv = styled.div`
    
`;

const TotalAmountOwned = (props) => {
    return (
        <TotalAmountOwnedDiv>Total Amount Owned: {Math.abs(props.total).toLocaleString('en', { style: 'currency', currency: 'USD'})}</TotalAmountOwnedDiv>
    )
}

export default TotalAmountOwned;