import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class AdminWhereUniqueInput {
  uid: string
}

@InputType()
export class AdminWhereInputStrict
  implements RestrictProperties<AdminWhereInputStrict, Prisma.AdminWhereInput>
{
  uid: string | Prisma.StringFilter<'Admin'>
  createdAt: string | Date | Prisma.DateTimeFilter<'Admin'>
  updatedAt: string | Date | Prisma.DateTimeFilter<'Admin'>
  User:
    | (Prisma.Without<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput> &
        Prisma.UserWhereInput)
    | (Prisma.Without<Prisma.UserWhereInput, Prisma.UserScalarRelationFilter> &
        Prisma.UserScalarRelationFilter)
  Verifications: Prisma.VerificationListRelationFilter
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: AdminWhereInput[]
  OR: AdminWhereInput[]
  NOT: AdminWhereInput[]
}

@InputType()
export class AdminWhereInput extends PartialType(AdminWhereInputStrict) {}

@InputType()
export class AdminListRelationFilter {
  every?: AdminWhereInput
  some?: AdminWhereInput
  none?: AdminWhereInput
}

@InputType()
export class AdminRelationFilter {
  is?: AdminWhereInput
  isNot?: AdminWhereInput
}
