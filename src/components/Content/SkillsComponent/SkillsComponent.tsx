/**
 * SkillsComponent
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from 'react';

import classes from './Skills.module.css';
import ContentSection from "../ContentSection/ContentSection";
import ListItemComponent from "../../ListComponent/ListComponent";
import skills from './skillsState';

/**
 * SkillsComponent
 *
 * @return {*} JSX.Element
 */
const SkillsComponent: React.FC = (): JSX.Element => {
    let list = [];

    for (let [key, value] of Object.entries(skills)) {
        list.push(
            <ListItemComponent title={key}>
                <div className={classes.info}>
                    <progress id="file" max="5" value={value}></progress>
                </div>
            </ListItemComponent>
        );
    }

    return (
        <ContentSection title='Skills'>
            <ul className={classes.Skills}>
                {list}
            </ul>
        </ContentSection>
    )
};

export default SkillsComponent;