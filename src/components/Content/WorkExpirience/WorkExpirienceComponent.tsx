import React from "react";

import ContentSection from "../ContentSection/ContentSection";
import classes from "./WorkComponent.module.css";
import ListItemComponent from "../../ListComponent/ListComponent";
import work from "./workState";
import { ResumeBlocks } from "../useContent";

const WorkExpirienceComponent: React.FC<ResumeBlocks> = ({
  work_experience,
}): JSX.Element => {
  const list = work.map((el) => (
    <ListItemComponent
      key={el.company.title}
      title={el.company.title}
      subStyles={classes.title}
    >
      <div className={classes.info}>
        <span>{el.company.profession}</span>
        <span className={classes.period}>{el.company.period}</span>
      </div>
      {el.company.projects && (
        <div className={classes.projects}>
          <h5 className={classes.subTitle}>Projects:</h5>
          <ul>
            {el.company.projects.map((el) => (
              <ol key={el.url}>
                <a href={el.url} className={classes.url}>
                  {el.url}
                </a>

                <div className={classes.description}>
                  <p>{el.description}</p>
                  <p>
                    <span className={classes.stack}>Tech_stack:</span>{" "}
                    {el.Tech_stack}
                  </p>
                </div>
              </ol>
            ))}
          </ul>
        </div>
      )}
    </ListItemComponent>
  ));

  return (
    <ContentSection title="Work experience">
      <ul>{list}</ul>
    </ContentSection>
  );
};

export default WorkExpirienceComponent;
