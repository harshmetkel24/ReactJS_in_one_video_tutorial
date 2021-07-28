import React, { useEffect, useState, useReducer } from 'react';
import './style.css';

const reducer = (state, action) => {
    if (action.type === 'Increament') {
        state++;
    } else if (action.type === 'Decreament') {
        if (state > 0) state--;
    }
    return state;
};

const UseReducer = () => {
    const initialData = 0;
    // dispatch is used to trigger reducer function
    const [state, dispatch] = useReducer(reducer, initialData);

    return (
        <>
            <div className="center_div">
                <p className="myNumber">{state}</p>
                <div className="container">
                <div
                    className="button2"
                    onClick={() => dispatch({ type: 'Increament' })}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCREMENT
                </div>
                <div
                    className="button2"
                    onClick={() => dispatch({ type: 'Decreament' })}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECREAMENT
                </div>
                </div>
            </div>
        </>
    );
};

export default UseReducer;
