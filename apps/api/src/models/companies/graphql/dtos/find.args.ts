import { ArgsType, Field, registerEnumType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { CompanyOrderByWithRelationInput } from './order-by.args'
import { CompanyWhereInput, CompanyWhereUniqueInput } from './where.args'
import { RestrictProperties } from 'src/common/dtos/common.input'

// Регистрация типа для CompanyScalarFieldEnum
registerEnumType(Prisma.CompanyScalarFieldEnum, {
  name: 'CompanyScalarFieldEnum',
})

@ArgsType()
class FindManyCompanyArgsStrict {
  where: CompanyWhereInput
  orderBy: CompanyOrderByWithRelationInput[]
  cursor: CompanyWhereUniqueInput
  take: number
  skip: number

  // Здесь нужно использовать Prisma.CompanyFindManyArgs для omit
  // Тип CompanyOmit нужно настроить, если есть ошибки с типами
  @Field(() => [Prisma.CompanyScalarFieldEnum], { nullable: true })
  @Field(() => [Prisma.CompanyScalarFieldEnum])
  distinct: Prisma.CompanyScalarFieldEnum[]
}

@ArgsType()
export class FindManyCompanyArgs extends PartialType(
  FindManyCompanyArgsStrict,
) {}

@ArgsType()
export class FindUniqueCompanyArgs {
  where: CompanyWhereUniqueInput
}
