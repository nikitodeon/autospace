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

// Проверим, какие конфиги загружаются
// console.log('Конфиг 1 из @autospace/ui/tailwind.config:', config1)
console.log('Конфиг 2 из другого tailwind.config:', config2)
export default function Home() {
  const { data, loading } = useQuery(CompaniesDocument)
  console.log(data?.companies)
  console.log('Доступные цвета в Tailwind:', colorsConfig)
  return (
    <main className="h-[calc(100vh-4rem)]         bg-primary  text-red">
      Hello {add(343, 2)}
      {/* <div className="absolute top-16 bottom-0 left-0 right-0"> */}
      {/* <CarScene /> */}
      {/* </div>
      <div className="flex flex-col items-start space-y-2 font-black text-8xl">
        <div className="z-10 inline-block px-3 bg-primary mt-2">Need</div>{' '}
        <div className="z-10 inline-block w-full max-w-md px-3 bg-primary ">
          parking?
        </div> */}
      <div className="text-amber-50 bg-primary-500">
        {data?.companies.map((company) => (
          <div key={company.id}>
            {company.displayName} {company.description}
          </div>
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
