// import Image from 'next/image'
// import { getAllArticles } from './_utils/articles'
// import BagratJan from './_articles/2023-06-06-bagratjan.mdx'
// const articles = await getAllArticles()
import { query } from '@/app/_services/notionService'

const usePosts = async () => {
  const result = await query({
    filter: {
      property: 'Is published',
      checkbox: {
        equals: true,
      },
    },
  })

  return result
}

export default async function Blog() {
  const { results } = await usePosts()

  return (
    <main className="min-h-screen p-24">
      <div className="flex flex-col gap-16">
        {results.map((page) => (
          <div key={page.id}>{JSON.stringify(page, null, 2)}</div>
        ))}
      </div>
    </main>
  )
}
