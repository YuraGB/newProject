import React, { ReactNode } from "react";

export const DulyItem = ({ duty }: { duty: string }): ReactNode | null => {
  if (!duty) {
    return null;
  }

  return <li>{duty}</li>;
};
