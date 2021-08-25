import React, { useContext } from 'react';
import { BioDate } from './compA';

const CompC = ({ name }) => {
    const context = useContext(BioDate);
    return <h1>Hello worlds from C {context}</h1>;
};

export default CompC;
