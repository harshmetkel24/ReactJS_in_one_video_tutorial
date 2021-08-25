import React from 'react';
import CompC from './CompC';

const CompB = ({ name }) => {
    return (
        <div>
            <h1>Hello worlds from B</h1>
            <CompC name={name} />
        </div>
    );
};

export default CompB;
