/**
 * ProfileHeader
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React, { ReactElement } from "react";

import classes from "./ProfileHeader.module.css";
import profileImg from "../../../assets/images/profile.jpg";
import { ContainerProps } from "../../../hoc/types";
import { IResumeBlocks } from "../../Content/useContent";

/**
 * ProfileHeader
 *
 * @return {*} JSX.Element
 */
const ProfileHeader: React.FC<ContainerProps & Partial<IResumeBlocks>> = ({
  profile,
}): ReactElement | null => {
  if (!profile) {
    return null;
  }
  const { first_name = "", last_name = "", sub_title = "" } = profile;
  return (
    <section className={classes.Header}>
      <img src={profileImg} alt="yuhur_img" />
      <h1>{`${first_name} ${last_name}`}</h1>
      <h5>{sub_title}</h5>
    </section>
  );
};

export default ProfileHeader;
