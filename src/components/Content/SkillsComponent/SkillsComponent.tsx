/**
 * SkillsComponent
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React, { ReactElement } from "react";

import classes from "./Skills.module.css";
import ContentSection from "../ContentSection/ContentSection";
import { IResumeBlocks } from "../useContent";
import { ContainerProps } from "../../../hoc/types";
import { getList, sortObject } from "../../../util/helper";

/**
 * SkillsComponent
 *
 * @return {*} JSX.Element
 */
const SkillsComponent: React.FC<ContainerProps & Partial<IResumeBlocks>> = ({
  skills,
}): ReactElement => {
  let list: ReactElement[] = [];

  if (skills) {
    list = getList(sortObject(skills), classes);
  }

  return (
    <ContentSection title="Skills">
      <ul className={classes.Skills}>{list}</ul>
    </ContentSection>
  );
};

export default SkillsComponent;
