/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CommentWhereUniqueInput } from "../../comment/base/CommentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CommentUpdateManyWithoutAppUsersInput {
  @Field(() => [CommentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommentWhereUniqueInput],
  })
  connect?: Array<CommentWhereUniqueInput>;

  @Field(() => [CommentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommentWhereUniqueInput],
  })
  disconnect?: Array<CommentWhereUniqueInput>;

  @Field(() => [CommentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommentWhereUniqueInput],
  })
  set?: Array<CommentWhereUniqueInput>;
}

export { CommentUpdateManyWithoutAppUsersInput as CommentUpdateManyWithoutAppUsersInput };
