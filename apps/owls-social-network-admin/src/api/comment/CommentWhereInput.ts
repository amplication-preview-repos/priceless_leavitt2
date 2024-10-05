import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HootWhereUniqueInput } from "../hoot/HootWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CommentWhereInput = {
  appUser?: AppUserWhereUniqueInput;
  content?: StringNullableFilter;
  hoot?: HootWhereUniqueInput;
  id?: StringFilter;
  parentCommentId?: IntNullableFilter;
};
