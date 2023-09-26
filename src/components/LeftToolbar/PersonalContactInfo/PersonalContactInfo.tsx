/**
 * PersonalContactInfo
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React, { useMemo } from "react";

import classes from "./ContactInfo.module.css";
import ListItemComponent from "../../ListComponent/ListComponent";
import { ContainerProps } from "../../../hoc/types";
import { ResumeBlocks } from "../../Content/useContent";

/**
 * PersonalContactInfo
 *
 * @return {*} JSX.Element
 */
const PersonalContactInfo: React.FC<ContainerProps & ResumeBlocks> = ({
  contact_info,
}): JSX.Element | null => {
  const list = useMemo(() => {
    const array = [];
    if (contact_info) {
      for (const [key, value] of Object.entries(contact_info)) {
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
  }, []);

  if (!contact_info) {
    return null;
  }

  return <ul className={classes.ContactList}>{list}</ul>;
};

export default PersonalContactInfo;
