/**
 * EducationComponent
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React, { ReactElement, useMemo } from "react";

import ContentSection from "../ContentSection/ContentSection";
import ListItemComponent from "../../ListComponent/ListComponent";
import classes from "./Education.module.css";
import { IResumeBlocks } from "../useContent";
import { ContainerProps } from "../../../hoc/types";

/**
 * EducationComponent
 *
 * @return {*} JSX.Element
 */
const EducationComponent: React.FC<ContainerProps & Partial<IResumeBlocks>> = ({
  Education,
}): ReactElement | null => {
  const list = useMemo(() => {
    if (Array.isArray(Education)) {
      return Education.map((el) => {
        return (
          <ListItemComponent
            key={el.title}
            link={el.url}
            subStyles={classes.title}
            title={el.title}
          >
            <div className={classes.info}>
              {typeof el.description === "string" ? (
                <span>{el.description}</span>
              ) : (
                <a href={el.description.url}>{el.description.title}</a>
              )}
            </div>
          </ListItemComponent>
        );
      });
    } else {
      return null;
    }
  }, [Education]);

  if (!Education?.length) {
    return null;
  }
  return <ContentSection title="Education">{list}</ContentSection>;
};

export default EducationComponent;
