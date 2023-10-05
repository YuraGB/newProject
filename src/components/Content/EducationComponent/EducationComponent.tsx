/**
 * EducationComponent
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React, { ReactElement } from "react";

import ContentSection from "../ContentSection/ContentSection";
import classes from "./Education.module.css";
import { IResumeBlocks } from "../useContent";
import { ContainerProps } from "../../../hoc/types";
import { getList } from "../../../util/helper";

/**
 * EducationComponent
 *
 * @return {*} JSX.Element
 */
const EducationComponent: React.FC<ContainerProps & Partial<IResumeBlocks>> = ({
  Education,
}): ReactElement | null => {
  const list: React.ReactElement[] = getList(Education, classes);

  if (!Education) {
    return null;
  }
  return <ContentSection title="Education">{list}</ContentSection>;
};

export default EducationComponent;
