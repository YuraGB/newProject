import React, { useMemo } from "react";
import ListItemComponent from "../components/ListComponent/ListComponent";
import {
  BlockDefault,
  IWorkItemFields,
  WorkBlock,
} from "../components/Content/useContent";

type getListFunction = (
  source: BlockDefault | undefined | string | WorkBlock,
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
): React.ReactElement => {
  if (isLink(str)) {
    return (
      <a key={str} href={str} className={classes.url}>
        {str}
      </a>
    );
  }

  return <span key={str}>{str}</span>;
};

type SortObjectFunction = (
  objectToSort: BlockDefault | WorkBlock,
  cb?: ((a: any, b: any) => number) | undefined
) => BlockDefault | WorkBlock;

export const sortObject: SortObjectFunction = (
  objectToSort,
  cb
): BlockDefault => {
  return Object.entries(objectToSort)
    .sort(cb)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
};

/**
 * sortByDuration
 *
 * @param workA {[Job Name, job fields -> duration etc... ]}
 * @param workB {[Job Name, job fields -> duration etc... ]}
 */
export const sortByDuration = (
  workA: [string, IWorkItemFields],
  workB: [string, IWorkItemFields]
) => {
  const { duration: durationA } = workA[1];
  const { duration: durationB } = workB[1];
  const lastYearA = durationA.trim().replace(/\d+\/\d+ - \d+\//g, "");
  const lastYearB = durationB.trim().replace(/\d+\/\d+ - \d+\//g, "");

  // if duration is in progress
  if (lastYearB && isNaN(Number(lastYearB))) {
    return -1;
  }

  if (lastYearA && isNaN(Number(lastYearA))) {
    return -1;
  }

  return Number(lastYearB) - Number(lastYearA);
};
