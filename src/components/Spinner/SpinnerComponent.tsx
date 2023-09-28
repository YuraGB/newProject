/**
 * SpinnerComponent
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2023
 */
import React, { ReactElement } from "react";

import classes from "./SpinnerComponent.module.css";

/**
 * SpinnerComponent
 *
 * @return {*}  JSX.Element
 */
const SpinnerComponent: React.FC = (): ReactElement => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.spinner}></div>
    </section>
  );
};

export default SpinnerComponent;
