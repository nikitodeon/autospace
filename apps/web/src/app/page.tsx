'use client'
// import { CarScene } from '@autospace/3d/src/scenes/CarScene'
// import { IconSearch } from '@tabler/icons-react'
// import Link from 'next/link'
import { colorsConfig } from '@autospace/ui/src/styles/config'

import { useQuery } from '@apollo/client'
import { CompaniesDocument } from '@autospace/network/src/gql/generated'
import { add } from '@autospace/sample-lib'

// import config1 from '@autospace/ui/tailwind.config'
import config2 from '@autospace/web/tailwind.config'
import { BrandIcon } from '@autospace/ui/src/components/atoms/BrandIcon'
import { Button } from '@autospace/ui/src/components/atoms/Button'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { SearchGaragesDocument } from '@autospace/network/src/gql/generated'
// Проверим, какие конфиги загружаются
// console.log('Конфиг 1 из @autospace/ui/tailwind.config:', config1)
// console.log('Конфиг 2 из другого tailwind.config:', config2)
export default function Home() {
  const { data, loading, error } = useQuery(CompaniesDocument)
  const { data: garages } = useQuery(SearchGaragesDocument, {
    variables: {
      dateFilter: { end: '2024-12-05', start: '2024-12-05' },
      locationFilter: {
        ne_lat: 1,
        ne_lng: 1,
        sw_lat: -1,
        sw_lng: -1,
      },
    },
  })
  // if (error) {
  //   console.error('Ошибка при загрузке гаражей:', error)
  // }
  console.log(data?.companies)
  const { data: sessionData, status } = useSession()
  // console.log('Доступные цвета в Tailwind:', colorsConfig)
  const garagesQuery = useQuery(SearchGaragesDocument, {
    variables: {
      dateFilter: { end: '2024-12-05', start: '2024-12-05' },
      locationFilter: { ne_lat: 1, ne_lng: 1, sw_lat: -1, sw_lng: -1 },
    },
  })
  console.log('🔍 garagesQuery (полные данные):', garagesQuery)
  console.log('garages', garages)
  console.log('Полученные компании:', data?.companies)
  console.log('Полученные гаражи:', garages?.searchGarages)
  console.log('Загружаются гаражи с фильтрами: ', {
    dateFilter: { end: '2024-12-05', start: '2024-12-05' },
    locationFilter: { ne_lat: 1, ne_lng: 1, sw_lat: -1, sw_lng: -1 },
  })

  return (
    <main className="h-[calc(100vh-4rem)]          bg-primaryk  ">
      {sessionData?.user?.uid ? (
        <Button onClick={() => signOut()}>Signout</Button>
      ) : (
        <Link href="/login">Login</Link>
      )}
      {/* <BrandIcon /> */}
      {/* <Button /> */}
      {/* Hello {add(343, 2)} */}
      {/* <div className="absolute top-16 bottom-0 left-0 right-0"> */}
      {/* <CarScene /> */}
      {/* </div>
      <div className="flex flex-col items-start space-y-2 font-black text-8xl">
        <div className="z-10 inline-block px-3 bg-primary mt-2">Need</div>{' '}
        <div className="z-10 inline-block w-full max-w-md px-3 bg-primary ">
          parking?
        </div> */}
      <div className="text-amber-50 ">
        {data?.companies.map((company) => (
          <div key={company.id}>
            {company.displayName} {company.description}
          </div>
        ))}
      </div>
      <div>
        {garages?.searchGarages.map((garage) => (
          <div key={garage.id}>{JSON.stringify(garage)}</div>
        ))}
      </div>
      {/* <Link
          href="/search"
          className="z-10 flex items-center gap-2 px-3 py-2 text-xl font-medium text-black underline underline-offset-4 bg-primary"
        >
          <IconSearch /> Search now
        </Link> */}
      {/* </div> */}
    </main>
  )
}
