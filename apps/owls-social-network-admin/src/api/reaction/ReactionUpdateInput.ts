import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { HootWhereUniqueInput } from "../hoot/HootWhereUniqueInput";

export type ReactionUpdateInput = {
  appUser?: AppUserWhereUniqueInput | null;
  hoot?: HootWhereUniqueInput | null;
  typeField?: string | null;
};
