import Resume from "../../DataBase";
import { useMemo, useState } from "react";

export type BlockNames =
  | "Languages"
  | "skills"
  | "social_links"
  | "Education"
  | "about_me"
  | "profile"
  | "contact_info"
  | "work_experience";

export type SimpleBlockNames = Extract<
  BlockNames,
  "about_me" | "Languages" | "contact_info"
>;

export type ProfileFields = "first_name" | "last_name" | "sub_title";
export type ProfileItem = Record<ProfileFields, string>;

export type EducationFields = "title" | "url" | "description";
export type EducationFieldsSimple = Extract<EducationFields, "title" | "url">;
export type EducationFieldsSimpleRecord = Record<EducationFieldsSimple, string>;
export interface IEducationItem extends EducationFieldsSimpleRecord {
  description: string | EducationFieldsSimpleRecord;
}

export type WorkItemFields = "duration" | "duties" | "job_name" | "projects";
export type WorkItemFieldsSimple = Extract<
  WorkItemFields,
  "duration" | "job_name"
>;
export type WorkItemFieldsRecord = Record<WorkItemFieldsSimple, string>;
export interface IWorkItemFields extends WorkItemFieldsRecord {
  duties: string[];
  projects: string[];
}

export type WorkBlock = {
  [key: string]: IWorkItemFields;
};

export type BlockDefault = {
  [key: string]: string;
};

export type ResumeBlocks = {
  [key in SimpleBlockNames]: BlockDefault | string;
};

export interface IResumeBlocks extends ResumeBlocks {
  skills: BlockDefault;
  social_links: BlockDefault;
  Education: BlockDefault;
  profile: ProfileItem;
  work_experience: WorkBlock;
}

export interface PropsResumeBlocks {
  blocks: IResumeBlocks;
}

export const useContent = () => {
  const [blocks, setBlocks] = useState<IResumeBlocks | string | null>(null);
  void useMemo(async () => {
    const getBlocks: string | IResumeBlocks[] = await Resume;
    if (Array.isArray(getBlocks)) {
      setBlocks(getBlocks[0]);
    }

    if (typeof getBlocks === "string") {
      setBlocks(getBlocks);
    }
  }, []);

  return { blocks };
};
