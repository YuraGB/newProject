/**
 * ContentComponent
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from 'react';

import classes from './ContentComponent.module.css'
import AboutMeComponent from "./AboutMeComponent/AboutMeComponent";
import SkillsComponent from "./SkillsComponent/SkillsComponent";
import FramworksComponent from "./Frameworks/FramworksComponent";
import WorkExpirienceComponent from "./WorkExpirience/WorkExpirienceComponent";
import EducationComponent from "./EducationComponent/EducationComponent";

/**
 * ContentComponent
 *
 * @return {*} JSX.Element
 */
const ContentComponent:React.FC = (): JSX.Element => {
    return (
        <section className={classes.Content}>
            <AboutMeComponent />
            <SkillsComponent />
            <FramworksComponent />
            <WorkExpirienceComponent />
            <EducationComponent />
        </section>
    )
};

export default ContentComponent;
