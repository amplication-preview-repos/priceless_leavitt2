import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";
import { HOOT_TITLE_FIELD } from "./HootTitle";

export const HootShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="AppUser" source="appuser.id" reference="AppUser">
          <TextField source={APPUSER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Comment"
          target="hootId"
          label="Comments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="AppUser"
              source="appuser.id"
              reference="AppUser"
            >
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Reaction"
          target="hootId"
          label="Reactions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="AppUser"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Hoot" source="hoot.id" reference="Hoot">
              <TextField source={HOOT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
