/**
 * ProfileInfoComponent
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from "react";

import classes from "./ProfileInfoComponent.module.css";
import PersonalContactInfo from "../PersonalContactInfo/PersonalContactInfo";
import SocialsComponent from "../SocialComponents/SocialsComponent";
import Langauges from "../Languages/Langauges";
import { ContainerProps } from "../../../hoc/types";
import { IResumeBlocks } from "../../Content/useContent";

/**
 * ProfileInfoComponent
 *
 * @return {*} JSX.Element
 */
const ProfileInfoComponent: React.FC<ContainerProps & IResumeBlocks> = ({
  Languages,
  contact_info,
  social_links,
}): JSX.Element => {
  return (
    <section className={classes.InfoArea}>
      <h5>Languages</h5>
      <hr />
      <Langauges Languages={Languages} />
      <h5>Contact info</h5>
      <hr />
      <PersonalContactInfo contact_info={contact_info} />
      <SocialsComponent social_links={social_links} />
    </section>
  );
};

export default ProfileInfoComponent;
