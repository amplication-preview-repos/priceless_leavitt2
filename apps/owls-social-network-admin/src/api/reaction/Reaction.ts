import { AppUser } from "../appUser/AppUser";
import { Hoot } from "../hoot/Hoot";

export type Reaction = {
  appUser?: AppUser | null;
  createdAt: Date;
  hoot?: Hoot | null;
  id: string;
  typeField: string | null;
  updatedAt: Date;
};
