/**
 * FooterComponent
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React, { ReactElement } from "react";

import classes from "./FooterComponent.module.css";

/**
 * FooterComponent
 *
 * @return {*} JSX.Element
 */
const FooterComponent: React.FC = (): ReactElement => {
  return (
    <footer className={classes.footer}>
      <span>© copyright</span>
      <a href="https://github.com/YuraGB/newProject">
        This project is on the Github
      </a>
    </footer>
  );
};

export default FooterComponent;
