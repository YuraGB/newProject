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
    const list = [];

    for (const [key, value] of Object.entries(skills)) {
        list.push(
            <ListItemComponent key={key} title={key} subStyles={classes.title}>
                <div className={classes.info}>
                    <span>{value}</span>
                </div>
            </ListItemComponent>
        );
    }

    return (
        <ContentSection title='Skills'>
            <ul className={classes.Skills}>
                {list}
            </ul>
            <h5>Familiar</h5>
            <p>Canvas, Svg, Angular(5), React-Native</p>
        </ContentSection>
    )
};

export default SkillsComponent;