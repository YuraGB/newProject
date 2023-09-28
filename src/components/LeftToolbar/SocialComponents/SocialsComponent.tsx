import React, { useMemo } from "react";
import { SocialIcon } from "react-social-icons";

import classes from "./SocialsComponent.module.css";
import { IResumeBlocks } from "../../Content/useContent";

const SocialsComponent: React.FC<Partial<IResumeBlocks>> = ({
  social_links,
}): JSX.Element | null => {
  const list = useMemo(() => {
    const array: JSX.Element[] = [];

    if (social_links) {
      for (const [network, url] of Object.entries(social_links)) {
        array.push(<SocialIcon network={network} url={url} key={url} />);
      }
    }

    return array;
  }, [social_links]);

  if (!social_links) {
    return null;
  }

  return <section className={classes.socials}>{list}</section>;
};

export default SocialsComponent;
