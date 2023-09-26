/**
 * ProfileHeader
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from "react";

import classes from "./ProfileHeader.module.css";
import profileImg from "../../../assets/images/profile.jpg";
import { ContainerProps } from "../../../hoc/types";
import { IResumeBlocks } from "../../Content/useContent";

/**
 * ProfileHeader
 *
 * @return {*} JSX.Element
 */
const ProfileHeader: React.FC<ContainerProps & IResumeBlocks> = ({
  profile,
}): JSX.Element => {
  console.log(profile);
  return (
    <section className={classes.Header}>
      <img src={profileImg} alt="yuhur_img" />
      <h3>Yurii Hurianov</h3>
      <h5>
        Front-end developer | JavaScript, ReactJS, NodeJS, HTML5, CSS3, Less
        Cass PostCss
      </h5>
    </section>
  );
};

export default ProfileHeader;
