/**
 * LeftToolbar
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from 'react';

import classes from './LeftToolbar.module.css';
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileInfoComponent from "./ProfileInfoComponent/ProfileInfoComponent";
import FooterComponent from "../FooterComponent/FooterComponent";

/**
 * LeftToolbar
 *
 * @return {*} JSX.Element
 */
const LeftToolbar:React.FC = (): JSX.Element => {
    return (
        <section className={classes.Toolbar}>
            <ProfileHeader />
            <ProfileInfoComponent />
            <FooterComponent />
        </section>
    )
};

export default LeftToolbar;
