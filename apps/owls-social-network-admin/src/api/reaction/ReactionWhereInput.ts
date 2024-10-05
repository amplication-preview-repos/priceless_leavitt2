import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { HootWhereUniqueInput } from "../hoot/HootWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReactionWhereInput = {
  appUser?: AppUserWhereUniqueInput;
  hoot?: HootWhereUniqueInput;
  id?: StringFilter;
  typeField?: StringNullableFilter;
};
