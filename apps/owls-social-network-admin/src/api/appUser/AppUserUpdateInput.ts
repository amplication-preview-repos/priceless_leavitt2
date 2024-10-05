import { CommentUpdateManyWithoutAppUsersInput } from "./CommentUpdateManyWithoutAppUsersInput";
import { HootUpdateManyWithoutAppUsersInput } from "./HootUpdateManyWithoutAppUsersInput";
import { ReactionUpdateManyWithoutAppUsersInput } from "./ReactionUpdateManyWithoutAppUsersInput";

export type AppUserUpdateInput = {
  comments?: CommentUpdateManyWithoutAppUsersInput;
  email?: string | null;
  hoots?: HootUpdateManyWithoutAppUsersInput;
  password?: string | null;
  reactions?: ReactionUpdateManyWithoutAppUsersInput;
  username?: string | null;
};
