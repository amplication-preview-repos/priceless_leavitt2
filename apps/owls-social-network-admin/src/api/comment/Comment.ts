import { AppUser } from "../appUser/AppUser";
import { Hoot } from "../hoot/Hoot";

export type Comment = {
  appUser?: AppUser | null;
  content: string | null;
  createdAt: Date;
  hoot?: Hoot | null;
  id: string;
  parentCommentId: number | null;
  updatedAt: Date;
};
