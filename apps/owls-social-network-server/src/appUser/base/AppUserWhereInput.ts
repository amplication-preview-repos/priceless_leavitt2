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
import { CommentListRelationFilter } from "../../comment/base/CommentListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HootListRelationFilter } from "../../hoot/base/HootListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReactionListRelationFilter } from "../../reaction/base/ReactionListRelationFilter";

@InputType()
class AppUserWhereInput {
  @ApiProperty({
    required: false,
    type: () => CommentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CommentListRelationFilter)
  @IsOptional()
  @Field(() => CommentListRelationFilter, {
    nullable: true,
  })
  comments?: CommentListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => HootListRelationFilter,
  })
  @ValidateNested()
  @Type(() => HootListRelationFilter)
  @IsOptional()
  @Field(() => HootListRelationFilter, {
    nullable: true,
  })
  hoots?: HootListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  password?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ReactionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReactionListRelationFilter)
  @IsOptional()
  @Field(() => ReactionListRelationFilter, {
    nullable: true,
  })
  reactions?: ReactionListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  username?: StringNullableFilter;
}

export { AppUserWhereInput as AppUserWhereInput };
