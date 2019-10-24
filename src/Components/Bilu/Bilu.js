import React from 'react';
import './Bilu.css'



const bilu = (props) => {
    return (
        <div className="Bilu">
            <h1>This is the App page</h1>
            <input type='text'></input>
            <button onClick={props.nav} className="myButton">Back</button>
        </div>
    )
}

export default bilu;