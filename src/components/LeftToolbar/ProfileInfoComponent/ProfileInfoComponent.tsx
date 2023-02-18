/**
 * ProfileInfoComponent
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from 'react';

import classes from './ProfileInfoComponent.module.css';
import PersonalContactInfo from "../PersonalContactInfo/PersonalContactInfo";
import SocialsComponent from "../SocialComponents/SocialsComponent";
import Langauges from "../Languages/Langauges";

/**
 * ProfileInfoComponent
 *
 * @return {*} JSX.Element
 */
const ProfileInfoComponent:React.FC = ():JSX.Element => {
    return (
        <section className={classes.InfoArea}>
            <h5>Languages</h5>
            <hr />
            <Langauges />
            <h5>Contact info</h5>
            <hr/>
            <PersonalContactInfo />
            <SocialsComponent />
        </section>
    )
};

export default ProfileInfoComponent;
