/**
 * NotFoundComponent
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from "react";

import classes from "./NotFoundComponent.module.css";

/**
 * NotFoundComponent
 *
 * @return {*} JSX.Element
 */
const NotFoundComponent: React.FC = (): JSX.Element => {
  return (
    <section className={classes.root}>
      <h1>Sorry, there is some problems with the server.</h1>
      <h2>
        Please, try again latter or contact with{" "}
        <a href="mailto:yuhur1985@gmail.com">Yurii Hurianov by email</a>
      </h2>
    </section>
  );
};

export default NotFoundComponent;
