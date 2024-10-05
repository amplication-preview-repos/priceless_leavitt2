import { SortOrder } from "../../util/SortOrder";

export type ReactionOrderByInput = {
  appUserId?: SortOrder;
  createdAt?: SortOrder;
  hootId?: SortOrder;
  id?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
