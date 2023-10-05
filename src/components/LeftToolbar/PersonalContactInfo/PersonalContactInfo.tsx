/**
 * PersonalContactInfo
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React, { ReactElement } from "react";

import classes from "./ContactInfo.module.css";
import { ContainerProps } from "../../../hoc/types";
import { ResumeBlocks } from "../../Content/useContent";
import { getList } from "../../../util/helper";

/**
 * PersonalContactInfo
 *
 * @return {*} JSX.Element
 */
const PersonalContactInfo: React.FC<ContainerProps & Partial<ResumeBlocks>> = ({
  contact_info,
}): ReactElement | null => {
  const list: React.ReactElement[] = getList(contact_info, classes);

  if (!contact_info) {
    return null;
  }

  return <ul className={classes.ContactList}>{list}</ul>;
};

export default PersonalContactInfo;
