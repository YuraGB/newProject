/**
 * EducationComponent
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from 'react';

import ContentSection from "../ContentSection/ContentSection";
import ListItemComponent from "../../ListComponent/ListComponent";
import classes from "./Education.module.css";
import education from './educationState';

/**
 * EducationComponent
 *
 * @return {*} JSX.Element
 */
const EducationComponent: React.FC = (): JSX.Element => {
    const list = education.map((el) => {
        return (
            <ListItemComponent key={el.title} link={el.url} subStyles={classes.title} title={el.title}>
                <div className={classes.info}>
                    {typeof el.description === 'string' ?
                        <span>{el.description}</span> :
                        <a
                            href={el.description.url}
                        >{el.description.title}</a>
                    }
                </div>
            </ListItemComponent>
        )
    });

    return (
        <ContentSection title='Education'>
            {list}
        </ContentSection>
    )
};

export default EducationComponent;