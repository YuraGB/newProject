/**
 * AboutMeComponent
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from "react";
import ContentSection from "../ContentSection/ContentSection";
import { ResumeBlocks } from "../useContent";
import { ContainerProps } from "../../../hoc/types";

/**
 * AboutMeComponent
 * @return {*} JSX.Element
 */
const AboutMeComponent: React.FC<ContainerProps & ResumeBlocks> = ({
  about_me,
}): JSX.Element | null => {
  if (!about_me) {
    return null;
  }
  return (
    <ContentSection title="About Me">
      <p>{about_me as string}</p>
    </ContentSection>
  );
};

export default AboutMeComponent;
