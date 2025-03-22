import {
  ArgsType,
  Field,
  registerEnumType,
  PartialType,
  Int,
} from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { BookingOrderByWithRelationInput } from './order-by.args'
import { BookingWhereInput, BookingWhereUniqueInput } from './where.args'

registerEnumType(Prisma.BookingScalarFieldEnum, {
  name: 'BookingScalarFieldEnum',
})

@ArgsType()
class FindManyBookingArgsStrict {
  @Field(() => BookingWhereInput, { nullable: true })
  where?: BookingWhereInput

  @Field(() => [BookingOrderByWithRelationInput], { nullable: true })
  orderBy?: BookingOrderByWithRelationInput[]

  @Field(() => BookingWhereUniqueInput, { nullable: true })
  cursor?: BookingWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [Prisma.BookingScalarFieldEnum], { nullable: true })
  distinct?: Prisma.BookingScalarFieldEnum[]
}

@ArgsType()
export class FindManyBookingArgs extends PartialType(
  FindManyBookingArgsStrict,
) {}

@ArgsType()
export class FindUniqueBookingArgs {
  @Field(() => BookingWhereUniqueInput)
  where: BookingWhereUniqueInput
}
