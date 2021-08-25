import React, { createContext } from 'react';
import CompB from './compB';

const BioDate = createContext();

const CompA = () => {
    return (
        <BioDate.Provider value={'Harsh'}>
            <div>
                <h1>Hello worlds from A</h1>
                <CompB />
            </div>
        </BioDate.Provider>
    );
};

export default CompA;
// also remember there can be only one default export in any file
export { BioDate };

// context api consists of:
// context
// provider
// consumer
// but consumer is very complex part so to reduce the complexity of code we use useContext in place of consumer
