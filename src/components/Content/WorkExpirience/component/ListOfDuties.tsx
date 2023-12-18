import React, { ReactNode } from "react";
import { DulyItem } from "./DulyItem";
import classes from "../WorkComponent.module.css";

type Props = {
  list: string[];
};

export const ListOfDuties = ({ list }: Props): ReactNode | null => {
  if (!list || list?.length === 0) {
    return null;
  }

  return (
    <ul className={classes.dutyList}>
      {list.map((duty, index) => (
        <DulyItem key={index + duty} duty={duty} />
      ))}
    </ul>
  );
};
