/**
 * LeftToolbar
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from "react";

import classes from "./LeftToolbar.module.css";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileInfoComponent from "./ProfileInfoComponent/ProfileInfoComponent";
import FooterComponent from "../FooterComponent/FooterComponent";
import { ContainerProps } from "../../hoc/types";
import { PropsResumeBlocks } from "../Content/useContent";

/**
 * LeftToolbar
 *
 * @return {*} JSX.Element
 */
const LeftToolbar: React.FC<ContainerProps & PropsResumeBlocks> = ({
  blocks,
}): JSX.Element | null => {
  if (!blocks) {
    return null;
  }
  const { profile, contact_info, Languages, social_links } = blocks;

  return (
    <section className={classes.Toolbar}>
      <ProfileHeader profile={profile} />
      <ProfileInfoComponent
        Languages={Languages}
        social_links={social_links}
        contact_info={contact_info}
      />
      <FooterComponent />
    </section>
  );
};

export default LeftToolbar;
