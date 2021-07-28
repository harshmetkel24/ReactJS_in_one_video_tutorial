import React from 'react';
import "style.css"

const UseState = () => {
    const initialData = 10;
    const [myNumber, setMyNumber] = React.useState(initialData);

    return (
        <>
            <div className="center_div">
                <p>{myNumber}</p>
                <div
                    className="button2"
                    onClick={() => setMyNumber(myNumber + 1)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCREMENT
                </div>
                <div
                    className="button2"
                    onClick={() =>
                        myNumber > 0
                            ? setMyNumber(myNumber - 1)
                            : setMyNumber(0)
                    }
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECREAMENT
                </div>
            </div>
        </>
    );
};

export default UseState;
