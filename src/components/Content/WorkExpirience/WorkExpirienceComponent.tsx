import React, { ReactElement, useMemo } from "react";

import ContentSection from "../ContentSection/ContentSection";
import classes from "./WorkComponent.module.css";
import ListItemComponent from "../../ListComponent/ListComponent";
import { IResumeBlocks } from "../useContent";

const WorkExpirienceComponent: React.FC<Partial<IResumeBlocks>> = ({
  work_experience,
}): ReactElement | null => {
  const list = useMemo(() => {
    if (work_experience) {
      const array: ReactElement[] = [];
      for (const [companyName, details] of Object.entries(work_experience)) {
        const { job_name, duties, duration, projects } = details;
        const item = (
          <ListItemComponent
            key={companyName}
            title={companyName}
            subStyles={classes.title}
          >
            <div className={classes.info}>
              <span className={classes.jobName}>{job_name}</span>
              <span className={classes.period}>{duration}</span>
            </div>
            {duties && <p className={classes.duties}>{duties.join(", ")}</p>}

            {projects && (
              <div className={classes.projects}>
                <h5 className={classes.subTitle}>Projects:</h5>
                <ul>
                  {projects.map((el: string) => (
                    <a href={el} className={classes.url}>
                      {el}
                    </a>
                  ))}
                </ul>
              </div>
            )}
          </ListItemComponent>
        );

        array.push(item);
      }

      return array;
    }

    return null;
  }, [work_experience]);

  return (
    <ContentSection title="Work experience">
      <ul>{list}</ul>
    </ContentSection>
  );
};

export default WorkExpirienceComponent;
