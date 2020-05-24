/**
 * FramworksComponent
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from 'react';

import ContentSection from "../ContentSection/ContentSection";

/**
 * FramworksComponent
 *
 * @return {*} JSX.Element
 */
const FramworksComponent:React.FC = (): JSX.Element => {
    return (
        <ContentSection title='Frameworks, MVC, CMS, Libraries'>
            <p>
                Express, Mongoose, React, Jquery, Jquery-UI, React-Redux, React-Saga, Thunk, Magento 2, Passportjs
            </p>
            <h5>Familiar</h5>
            <p>Canvas, Svg, Angular(5), React-Native</p>
        </ContentSection>
    )
};

export default FramworksComponent;