import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  appUserId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  hootId?: SortOrder;
  id?: SortOrder;
  parentCommentId?: SortOrder;
  updatedAt?: SortOrder;
};
