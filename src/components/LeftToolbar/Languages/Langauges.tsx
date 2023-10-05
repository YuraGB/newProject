/**
 * Languages
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React, { ReactElement } from "react";

import classes from "../PersonalContactInfo/ContactInfo.module.css";
import { ResumeBlocks } from "../../Content/useContent";
import { getList } from "../../../util/helper";

/**
 * Languages
 *
 * @return {*} JSX.Element
 */
const Languages: React.FC<Partial<ResumeBlocks>> = ({
  Languages,
}): ReactElement | null => {
  const list: React.ReactElement[] = getList(Languages, classes);

  if (!Languages) {
    return null;
  }

  return <ul className={classes.ContactList}>{list}</ul>;
};

export default Languages;
