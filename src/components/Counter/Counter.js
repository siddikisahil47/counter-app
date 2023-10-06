import React, { useState } from 'react';
import './Counter.css'; 

const Counter = () => {
    const [num, setNum] = useState(0);

    const handleButtonClick = (operation) => {
        if (operation === 'decrease') {
            setNum(num - 1);
        } else if (operation === 'increase') {
            setNum(num + 1);
        } else {
            setNum(0);
        }
    };

    return (
        <main>
            <div className='container'>
                <h1>Counter</h1>
                <span className={`value ${num > 0 ? 'green' : num < 0 ? 'red' : 'black'}`}>{num}</span>
                <div>
                    <button className="btn btn-danger decrease" onClick={() => handleButtonClick('decrease')}>
                        <i className="fa fa-minus" aria-hidden="true">Substact</i>
                    </button>
                    <button className="btn btn-secondary reset" onClick={() => handleButtonClick('reset')}>
                        Reset
                    </button>
                    <button className="btn btn-success increase" onClick={() => handleButtonClick('increase')}>
                        <i className="fa fa-plus" aria-hidden="true">Add</i>
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Counter;
