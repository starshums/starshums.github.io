import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

const Contact = () => {

    return (
        <Fragment>
            <div class="command commndMenu">
                <p> Contact me here : <a class='n-link' href='mailto:chemsed.dinrachidi@gmail.com'>chemsed.dinrachidi@gmail.com</a> </p>
                <Link to="/">Go Back.</Link>
            </div>
        </Fragment>
    );
}

export default Contact;