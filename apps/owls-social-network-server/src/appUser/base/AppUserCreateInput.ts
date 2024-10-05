/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommentCreateNestedManyWithoutAppUsersInput } from "./CommentCreateNestedManyWithoutAppUsersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { HootCreateNestedManyWithoutAppUsersInput } from "./HootCreateNestedManyWithoutAppUsersInput";
import { ReactionCreateNestedManyWithoutAppUsersInput } from "./ReactionCreateNestedManyWithoutAppUsersInput";

@InputType()
class AppUserCreateInput {
  @ApiProperty({
    required: false,
    type: () => CommentCreateNestedManyWithoutAppUsersInput,
  })
  @ValidateNested()
  @Type(() => CommentCreateNestedManyWithoutAppUsersInput)
  @IsOptional()
  @Field(() => CommentCreateNestedManyWithoutAppUsersInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutAppUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => HootCreateNestedManyWithoutAppUsersInput,
  })
  @ValidateNested()
  @Type(() => HootCreateNestedManyWithoutAppUsersInput)
  @IsOptional()
  @Field(() => HootCreateNestedManyWithoutAppUsersInput, {
    nullable: true,
  })
  hoots?: HootCreateNestedManyWithoutAppUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string | null;

  @ApiProperty({
    required: false,
    type: () => ReactionCreateNestedManyWithoutAppUsersInput,
  })
  @ValidateNested()
  @Type(() => ReactionCreateNestedManyWithoutAppUsersInput)
  @IsOptional()
  @Field(() => ReactionCreateNestedManyWithoutAppUsersInput, {
    nullable: true,
  })
  reactions?: ReactionCreateNestedManyWithoutAppUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string | null;
}

export { AppUserCreateInput as AppUserCreateInput };
