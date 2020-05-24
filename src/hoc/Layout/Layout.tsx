/**
 * The Layout component
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';

import Auxx from "../Auxx/Auxx";
import classes from './Layout.module.css';
import LeftToolbar from "../../components/LeftToolbar/LeftToolbar";

/**
 * Layout hire order component
 *
 * @param props
 * @author Yurii Huriianov <yuhur1985@gmail.com
 */
const Layout:React.FC = (props): JSX.Element => {
    return (
        <Auxx>
            <main className={classes.Main}>
                <LeftToolbar/>
                {props.children}
            </main>
        </Auxx>
    )
};

export default Layout;
