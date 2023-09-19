/**
 * ContentComponent
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from 'react'

import AboutMeComponent from './AboutMeComponent/AboutMeComponent'
import SkillsComponent from './SkillsComponent/SkillsComponent'
import WorkExpirienceComponent from './WorkExpirience/WorkExpirienceComponent'
import EducationComponent from './EducationComponent/EducationComponent'
import FooterComponent from '../FooterComponent/FooterComponent'

import classes from './ContentComponent.module.css'
import {useContent} from "./useContent";

/**
 * ContentComponent
 *
 * @return {*} JSX.Element
 */
const ContentComponent: React.FC = () => {
  const {blocks} = useContent();
    console.log(blocks)
  return (
        <section className={classes.Content}>
            <AboutMeComponent />
            <SkillsComponent />
            <WorkExpirienceComponent />
            <EducationComponent />
            <FooterComponent />
        </section>
  )
}

export default ContentComponent
