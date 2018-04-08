import React from 'react';
import { Input, Label } from 'semantic-ui-react';

const TotalAmountInvested = ({ totalAmountInvestedUSD, onChangeUpdateTotalAmountInvested }) => {

    // if totalAmountInvestedUSD is 0, set value to empty string 
    // so placeholder reads Total Amount Invested to the user
    const value = totalAmountInvestedUSD || '';

    return (
        <div>
            <Input
                icon="dollar"
                iconPosition="left"
                placeholder="Total Amount Invested" 
                value={value} 
                onChange={onChangeUpdateTotalAmountInvested}
            />
        </div>
    );
};

export default TotalAmountInvested;