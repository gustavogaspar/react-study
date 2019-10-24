import React from 'react';
import './Main.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const main = (props) => {
    return (
        <div className="Main">
            <h1>Welcome to Sirius</h1>
            <h3>The ultimate professional advisor.<br />Ask him what you want to be, to learn,<br /> or where do you wanna
                work...</h3>
            <button onClick={props.nav} className="myButton">Get Started</button>
        </div>
    )
}

export default main;