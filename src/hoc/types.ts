import React from "react";
import { ResumeBlocks } from "../components/Content/useContent";

export type ContainerProps = {
  children?: React.ReactNode;
};

export type Blocks = { blocks: ResumeBlocks };

export type PropsWithBlocks = ContainerProps & Blocks;
