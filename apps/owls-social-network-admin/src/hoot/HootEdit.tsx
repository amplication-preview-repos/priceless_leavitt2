import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AppUserTitle } from "../appUser/AppUserTitle";
import { CommentTitle } from "../comment/CommentTitle";
import { ReactionTitle } from "../reaction/ReactionTitle";

export const HootEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="appUser.id" reference="AppUser" label="AppUser">
          <SelectInput optionText={AppUserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="comments" reference="Comment">
          <SelectArrayInput
            optionText={CommentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="content" multiline source="content" />
        <ReferenceArrayInput source="reactions" reference="Reaction">
          <SelectArrayInput
            optionText={ReactionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
