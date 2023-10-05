/**
 * ContentSection
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React, { ReactElement } from "react";

import classes from "./ContentSection.module.css";

type Props = {
  children?: ReactElement | ReactElement[] | null;
  title?: string | undefined;
};

/**
 * ContentSection
 *
 * @param children
 * @param title
 * @return {*} JSX.Element
 */
const ContentSection: React.FC<Props> = ({
  children,
  title = "",
}): ReactElement | null => {
  if (!children && !title) {
    return null;
  }
  return (
    <section className={classes.Section}>
      <h5>{title}</h5>
      <hr />
      {children}
    </section>
  );
};

export default ContentSection;
