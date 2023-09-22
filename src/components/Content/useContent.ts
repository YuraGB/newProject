import Resume from "../../DataBase";
import { useMemo, useState } from "react";
import * as string_decoder from "string_decoder";

export type BlockNames =
  | "Education"
  | "Languages"
  | "about_me"
  | "contact_info"
  | "profile"
  | "skills"
  | "social_links"
  | "work_experience";

export type BlockDefault = {
  [key: string]: string;
};

export type ResumeBlocks = {
  [key in BlockNames]: BlockDefault | string;
};

export const useContent = () => {
  const [blocks, setBlocks] = useState<ResumeBlocks | string | null>(null);
  void useMemo(async () => {
    const getBlocks: string | ResumeBlocks[] = await Resume;

    if (Array.isArray(getBlocks)) {
      setBlocks(getBlocks[0]);
    }

    if (typeof getBlocks === "string") {
      setBlocks(getBlocks);
    }
  }, []);

  return { blocks };
};
