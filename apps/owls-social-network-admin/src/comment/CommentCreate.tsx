import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AppUserTitle } from "../appUser/AppUserTitle";
import { HootTitle } from "../hoot/HootTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="appUser.id" reference="AppUser" label="AppUser">
          <SelectInput optionText={AppUserTitle} />
        </ReferenceInput>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="hoot.id" reference="Hoot" label="Hoot">
          <SelectInput optionText={HootTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="parentCommentId"
          source="parentCommentId"
        />
      </SimpleForm>
    </Create>
  );
};
