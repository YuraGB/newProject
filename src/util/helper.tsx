import React, { useMemo } from "react";
import ListItemComponent from "../components/ListComponent/ListComponent";
import { BlockDefault } from "../components/Content/useContent";

type getListFunction = (
  source: BlockDefault | undefined | string,
  classes: { readonly [key: string]: string }
) => React.ReactElement[] | [];

export const getList: getListFunction = (source, classes) =>
  useMemo(() => {
    const array: React.ReactElement[] = [];

    if (source) {
      for (const [key, value] of Object.entries(source)) {
        array.push(
          <ListItemComponent key={key} title={key} subStyles={classes.title}>
            <div className={classes.info}>{getLink(value, classes)}</div>
          </ListItemComponent>
        );
      }
    }

    return array;
  }, [source]);

export const isLink = (str: string): boolean => !!str?.includes("http");

export const getLink = (
  str: string,
  classes: { readonly [key: string]: string }
) => {
  if (isLink(str)) {
    return (
      <a key={str} href={str} className={classes.url}>
        {str}
      </a>
    );
  }

  return <span key={str}>{str}</span>;
};
