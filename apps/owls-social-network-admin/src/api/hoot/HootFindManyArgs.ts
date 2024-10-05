import { HootWhereInput } from "./HootWhereInput";
import { HootOrderByInput } from "./HootOrderByInput";

export type HootFindManyArgs = {
  where?: HootWhereInput;
  orderBy?: Array<HootOrderByInput>;
  skip?: number;
  take?: number;
};
