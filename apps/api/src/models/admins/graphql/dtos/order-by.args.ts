import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'

@InputType()
export class AdminOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      AdminOrderByWithRelationInputStrict,
      Prisma.AdminOrderByWithRelationInput
    >
{
  uid: Prisma.SortOrder
  createdAt: Prisma.SortOrder
  updatedAt: Prisma.SortOrder
  User: Prisma.UserOrderByWithRelationInput
  Verifications: Prisma.VerificationOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class AdminOrderByWithRelationInput extends PartialType(
  AdminOrderByWithRelationInputStrict,
) {}

@InputType()
export class AdminOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
