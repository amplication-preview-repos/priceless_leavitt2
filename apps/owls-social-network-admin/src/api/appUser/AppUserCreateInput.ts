import { CommentCreateNestedManyWithoutAppUsersInput } from "./CommentCreateNestedManyWithoutAppUsersInput";
import { HootCreateNestedManyWithoutAppUsersInput } from "./HootCreateNestedManyWithoutAppUsersInput";
import { ReactionCreateNestedManyWithoutAppUsersInput } from "./ReactionCreateNestedManyWithoutAppUsersInput";

export type AppUserCreateInput = {
  comments?: CommentCreateNestedManyWithoutAppUsersInput;
  email?: string | null;
  hoots?: HootCreateNestedManyWithoutAppUsersInput;
  password?: string | null;
  reactions?: ReactionCreateNestedManyWithoutAppUsersInput;
  username?: string | null;
};
