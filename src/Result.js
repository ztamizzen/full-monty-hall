import React from 'react';

function Result(props) {
    const { result, count } = props;
    if (!props.result) {
        return null;
    }
    const { wins, iterations, pickOtherDoor } = result;
    const ratio = ((wins / iterations) * 100).toFixed(1);
    return (
        <div className="App-result">
            <p className="bigger">Du vann {wins} ggr av {count}.</p>
            <p>
                {ratio}% chans till vinst
                {pickOtherDoor ? " för att du bytte dörr" : " för att du inte bytte dörr"}
            </p>
        </div>
    );
}

export default Result;
