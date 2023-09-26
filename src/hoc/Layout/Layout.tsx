/**
 * The Layout component
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

import Auxx from "../Auxx/Auxx";
import classes from "./Layout.module.css";
import LeftToolbar from "../../components/LeftToolbar/LeftToolbar";
import { ContainerProps } from "../types";
import { PropsResumeBlocks } from "../../components/Content/useContent";

/**
 * Layout hire order component
 *
 * @param props
 * @author Yurii Huriianov <yuhur1985@gmail.com
 */
const Layout: React.FC<ContainerProps & PropsResumeBlocks> = ({
  children,
  blocks,
}): JSX.Element => {
  const ref = useRef<HTMLElement | null>(null);

  return (
    <Auxx>
      <ReactToPrint
        trigger={() => {
          return (
            <div className={classes.print_wrapper}>
              <a className={classes.to_print} href="#">
                Print this out!
              </a>
            </div>
          );
        }}
        content={() => ref.current}
        pageStyle={classes.print}
        bodyClass={classes.print}
      />
      <main ref={ref} className={classes.Main}>
        <LeftToolbar blocks={blocks} />
        {children}
      </main>
    </Auxx>
  );
};

export default React.memo(Layout);
