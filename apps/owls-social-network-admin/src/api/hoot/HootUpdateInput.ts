import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { CommentUpdateManyWithoutHootsInput } from "./CommentUpdateManyWithoutHootsInput";
import { ReactionUpdateManyWithoutHootsInput } from "./ReactionUpdateManyWithoutHootsInput";

export type HootUpdateInput = {
  appUser?: AppUserWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutHootsInput;
  content?: string | null;
  reactions?: ReactionUpdateManyWithoutHootsInput;
};
