import React from 'react';
import "./navigation.module.css";

const navigationItem = (props) => {
    return (
        <nav>
            <ul>
                {props.showHome ? <li>
                    Home
                </li> : null}

                <li>
                    Search
                </li>
                <li>
                    Settings
                </li>
            </ul>
        </nav>
    )
}

export default navigationItem;