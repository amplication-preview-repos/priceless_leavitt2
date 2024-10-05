import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { HootWhereUniqueInput } from "../hoot/HootWhereUniqueInput";

export type ReactionCreateInput = {
  appUser?: AppUserWhereUniqueInput | null;
  hoot?: HootWhereUniqueInput | null;
  typeField?: string | null;
};
