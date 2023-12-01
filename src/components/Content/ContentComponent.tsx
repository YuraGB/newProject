/**
 * ContentComponent
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React, { ReactElement } from "react";

import AboutMeComponent from "./AboutMeComponent/AboutMeComponent";
import SkillsComponent from "./SkillsComponent/SkillsComponent";
import WorkExpirienceComponent from "./WorkExpirience/WorkExpirienceComponent";
import EducationComponent from "./EducationComponent/EducationComponent";
import FooterComponent from "../FooterComponent/FooterComponent";

import classes from "./ContentComponent.module.css";
import { PropsResumeBlocks } from "./useContent";

/**
 * ContentComponent
 *
 * @return {*} JSX.Element
 */
const ContentComponent: React.FC<PropsResumeBlocks> = ({
  blocks,
}): ReactElement => {
  const { about_me, skills, work_experience, Education } = blocks;

  return (
    <section className={classes.Content}>
      <AboutMeComponent about_me={about_me} />
      <SkillsComponent skills={skills} />
      <WorkExpirienceComponent work_experience={work_experience} />
      <EducationComponent Education={Education} />
      <FooterComponent />
    </section>
  );
};

export default React.memo(ContentComponent);
