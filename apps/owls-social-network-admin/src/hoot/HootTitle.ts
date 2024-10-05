import { Hoot as THoot } from "../api/hoot/Hoot";

export const HOOT_TITLE_FIELD = "id";

export const HootTitle = (record: THoot): string => {
  return record.id?.toString() || String(record.id);
};
