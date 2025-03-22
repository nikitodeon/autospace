import {
  ArgsType,
  Field,
  registerEnumType,
  Int,
  PartialType,
} from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { CompanyOrderByWithRelationInput } from './order-by.args'
import { CompanyWhereInput, CompanyWhereUniqueInput } from './where.args'

// Регистрация типа для GraphQL
registerEnumType(Prisma.CompanyScalarFieldEnum, {
  name: 'CompanyScalarFieldEnum',
})

@ArgsType()
class FindManyCompanyArgsStrict {
  @Field(() => CompanyWhereInput, { nullable: true })
  where?: CompanyWhereInput

  @Field(() => [CompanyOrderByWithRelationInput], { nullable: true })
  orderBy?: CompanyOrderByWithRelationInput[]

  @Field(() => CompanyWhereUniqueInput, { nullable: true })
  cursor?: CompanyWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [Prisma.CompanyScalarFieldEnum], { nullable: true })
  distinct?: Prisma.CompanyScalarFieldEnum[]
}

@ArgsType()
export class FindManyCompanyArgs extends PartialType(
  FindManyCompanyArgsStrict,
) {}

@ArgsType()
export class FindUniqueCompanyArgs {
  @Field(() => CompanyWhereUniqueInput)
  where: CompanyWhereUniqueInput
}
