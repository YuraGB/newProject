import Resume from "../../DataBase";
import { useMemo, useState } from "react";

export type BlockNames =
  | "Languages"
  | "about_me"
  | "contact_info"
  | "work_experience";

export type ProfileFields = "first_name" | "last_name" | "sub_title";

export type ProfileItem = {
  [key in ProfileFields]: string;
};

export type EducationItem = {
  title: string;
  url: string;
  description:
    | string
    | {
        url: string;
        title: string;
      };
};

export type BlockDefault = {
  [key: string]: string;
};

export type ResumeBlocks = {
  [key in BlockNames]?: BlockDefault | string;
};

export interface IResumeBlocks extends ResumeBlocks {
  skills?: BlockDefault;
  social_links?: BlockDefault;
  Education?: EducationItem[];
  profile?: ProfileItem[];
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
