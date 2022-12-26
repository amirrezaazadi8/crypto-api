import React from 'react';

//gif
import spinner from "../gif/Loading_icon.gif"

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="Loading"></img>
            <h1>Loading...</h1>
        </div>
    )
}

export default Loader;