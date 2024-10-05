import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReactionListRelationFilter } from "../reaction/ReactionListRelationFilter";

export type HootWhereInput = {
  appUser?: AppUserWhereUniqueInput;
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  reactions?: ReactionListRelationFilter;
};
