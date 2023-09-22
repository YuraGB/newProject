/**
 * Auxx wrapper
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from "react";
import { ContainerProps } from "../types";

/**
 * Auxx hire order component
 *
 * @param {*} props
 * @return {*} children of the component
 * @constructor
 */
const Auxx: React.FC<ContainerProps> = ({
  children,
}: ContainerProps): React.ReactNode | React.ReactNode[] => children;

export default Auxx;
