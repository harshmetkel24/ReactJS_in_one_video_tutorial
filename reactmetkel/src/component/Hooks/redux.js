import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumver, decNumber } from '../../actions/index';

const Redux = () => {
    const myState = useSelector((state) => {
        return state.changeNumber;
    });
    const dispatch = useDispatch();
    return (
        <>
            <div className="main-cont">
                <div className="elements">
                    <h1>Increment/Decrement counter</h1>
                    <div>using React and Redux</div>
                    <div className="op-cont">
                        <div
                            className="side"
                            onClick={() => dispatch(decNumber(2))}
                        >
                            -
                        </div>
                        <input type="number" name="" id="" value={myState} />
                        <div
                            className="side"
                            onClick={() => dispatch(incNumver(5))}
                        >
                            +
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Redux;
