import { Reaction as TReaction } from "../api/reaction/Reaction";

export const REACTION_TITLE_FIELD = "typeField";

export const ReactionTitle = (record: TReaction): string => {
  return record.typeField?.toString() || String(record.id);
};
