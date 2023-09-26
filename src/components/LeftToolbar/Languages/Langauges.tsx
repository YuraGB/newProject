/**
 * Languages
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React, { useMemo } from "react";

import classes from "../PersonalContactInfo/ContactInfo.module.css";
import ListItemComponent from "../../ListComponent/ListComponent";
import { ResumeBlocks } from "../../Content/useContent";

/**
 * Languages
 *
 * @return {*} JSX.Element
 */
const Languages: React.FC<ResumeBlocks> = ({
  Languages,
}): JSX.Element | null => {
  const list = useMemo(() => {
    const array = [];

    if (Languages) {
      for (const [key, value] of Object.entries(Languages)) {
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
  }, [Languages]);

  if (!Languages) {
    return null;
  }

  return <ul className={classes.ContactList}>{list}</ul>;
};

export default Languages;
