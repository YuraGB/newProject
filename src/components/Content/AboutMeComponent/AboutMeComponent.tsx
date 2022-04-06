/**
 * AboutMeComponent
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';
import ContentSection from "../ContentSection/ContentSection";

/**
 * AboutMeComponent
 * @return {*} JSX.Element
 */
const AboutMeComponent:React.FC = (): JSX.Element => {
    return (
        <ContentSection title="About Me">
            <p>
                Front-end web developer with over 4 years of experience in e-commerce projects. My
                greatest strength is a responsibility, teamwork, hard-worker.
            </p>
        </ContentSection>
    )
};

export default AboutMeComponent;