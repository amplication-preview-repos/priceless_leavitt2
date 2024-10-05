import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { CommentCreateNestedManyWithoutHootsInput } from "./CommentCreateNestedManyWithoutHootsInput";
import { ReactionCreateNestedManyWithoutHootsInput } from "./ReactionCreateNestedManyWithoutHootsInput";

export type HootCreateInput = {
  appUser?: AppUserWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutHootsInput;
  content?: string | null;
  reactions?: ReactionCreateNestedManyWithoutHootsInput;
};
