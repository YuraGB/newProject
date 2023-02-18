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
                Front-end web developer with over 5 years of experience in e-commerce projects.
                I have deep knowledge's in ReactJs, JS, HTML, Node js.
                Experienced in creating React components, Magento 2 modules,
                and creating highly effective user-friendly web interfaces.
                My greatest strength is responsibility, teamwork, hard-worker.
            </p>
        </ContentSection>
    )
};

export default AboutMeComponent;