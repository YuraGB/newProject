/**
 * SkillsComponent
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React, { ReactElement, useMemo } from "react";

import classes from "./Skills.module.css";
import ContentSection from "../ContentSection/ContentSection";
import ListItemComponent from "../../ListComponent/ListComponent";
import { IResumeBlocks } from "../useContent";
import { ContainerProps } from "../../../hoc/types";

/**
 * SkillsComponent
 *
 * @return {*} JSX.Element
 */
const SkillsComponent: React.FC<ContainerProps & Partial<IResumeBlocks>> = ({
  skills,
}): ReactElement => {
  const list = useMemo(() => {
    const array = [];

    if (skills) {
      for (const [key, value] of Object.entries(skills)) {
        array.push(
          <ListItemComponent key={key} title={key} subStyles={classes.title}>
            <div className={classes.info}>
              <span>{value}</span>
            </div>
          </ListItemComponent>
        );
      }
    }

    return array;
  }, [skills]);

  return (
    <ContentSection title="Skills">
      <ul className={classes.Skills}>{list}</ul>
    </ContentSection>
  );
};

export default SkillsComponent;
