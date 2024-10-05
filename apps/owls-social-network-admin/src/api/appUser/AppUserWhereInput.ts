import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HootListRelationFilter } from "../hoot/HootListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReactionListRelationFilter } from "../reaction/ReactionListRelationFilter";

export type AppUserWhereInput = {
  comments?: CommentListRelationFilter;
  email?: StringNullableFilter;
  hoots?: HootListRelationFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  reactions?: ReactionListRelationFilter;
  username?: StringNullableFilter;
};
