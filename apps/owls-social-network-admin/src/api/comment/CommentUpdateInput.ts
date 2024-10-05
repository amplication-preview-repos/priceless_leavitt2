import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { HootWhereUniqueInput } from "../hoot/HootWhereUniqueInput";

export type CommentUpdateInput = {
  appUser?: AppUserWhereUniqueInput | null;
  content?: string | null;
  hoot?: HootWhereUniqueInput | null;
  parentCommentId?: number | null;
};
