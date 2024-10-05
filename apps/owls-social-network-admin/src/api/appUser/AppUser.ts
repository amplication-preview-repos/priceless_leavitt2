import { Comment } from "../comment/Comment";
import { Hoot } from "../hoot/Hoot";
import { Reaction } from "../reaction/Reaction";

export type AppUser = {
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  hoots?: Array<Hoot>;
  id: string;
  password: string | null;
  reactions?: Array<Reaction>;
  updatedAt: Date;
  username: string | null;
};
