import { AppUser } from "../appUser/AppUser";
import { Comment } from "../comment/Comment";
import { Reaction } from "../reaction/Reaction";

export type Hoot = {
  appUser?: AppUser | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  reactions?: Array<Reaction>;
  updatedAt: Date;
};
