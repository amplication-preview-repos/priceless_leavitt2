import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";
import { HOOT_TITLE_FIELD } from "../hoot/HootTitle";

export const CommentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Comments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
