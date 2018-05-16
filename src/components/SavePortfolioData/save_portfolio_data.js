import React from 'react';
import { Button } from 'semantic-ui-react';

const SavePortfolioData = ({ onClickSaveData, onClickClearData }) => {
    return (
        <div>
            <Button.Group>
                <Button onClick={onClickSaveData}>Save</Button>
                <Button onClick={onClickClearData}>Clear</Button>
            </Button.Group>
        </div>
    )
};

export default SavePortfolioData;