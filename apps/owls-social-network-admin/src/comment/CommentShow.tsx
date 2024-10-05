import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";
import { HOOT_TITLE_FIELD } from "../hoot/HootTitle";

export const CommentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="AppUser" source="appuser.id" reference="AppUser">
          <TextField source={APPUSER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Hoot" source="hoot.id" reference="Hoot">
          <TextField source={HOOT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="parentCommentId" source="parentCommentId" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
