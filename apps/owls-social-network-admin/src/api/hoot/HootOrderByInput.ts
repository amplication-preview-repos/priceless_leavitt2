import { SortOrder } from "../../util/SortOrder";

export type HootOrderByInput = {
  appUserId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
