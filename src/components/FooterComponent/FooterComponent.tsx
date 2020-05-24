/**
 * FooterComponent
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from 'react';

import classes from "./FooterComponent.module.css";

/**
 * FooterComponent
 *
 * @return {*} JSX.Element
 */
const FooterComponent: React.FC = (): JSX.Element => {
    return (
        <footer className={classes.footer}>
            <span>© copyright</span>
            <a href="#">This project is on the github</a>
        </footer>
    )
};

export default FooterComponent;