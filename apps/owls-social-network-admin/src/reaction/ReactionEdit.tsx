import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AppUserTitle } from "../appUser/AppUserTitle";
import { HootTitle } from "../hoot/HootTitle";

export const ReactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="appUser.id" reference="AppUser" label="AppUser">
          <SelectInput optionText={AppUserTitle} />
        </ReferenceInput>
        <ReferenceInput source="hoot.id" reference="Hoot" label="Hoot">
          <SelectInput optionText={HootTitle} />
        </ReferenceInput>
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
