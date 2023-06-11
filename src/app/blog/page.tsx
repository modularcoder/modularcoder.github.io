// import Image from 'next/image'
// import { getAllArticles } from './_utils/articles'
// import BagratJan from './_articles/2023-06-06-bagratjan.mdx'
// const articles = await getAllArticles()
import SectionIntro from '../SectionIntro/SectionIntro'
import { query, type PageObjectResponse } from '@/app/_services/notionService'
// import { PageObjectResponse } from '@notionhq/client'

// type PostsQueryResultItem = {
//   object: string
//   id: string
//   cover?: {
//     type: string
//     external?: {
//       url: string
//     }
//   }
//   properties: {
//     Title: {
//       title: {
//         plain_text: string
//       }[]
//     }
//   }
// }

type Post = {
  id: string
  cover?: string
  title: string
}

const usePosts = async () => {
  const result = await query({
    filter: {
      property: 'Is published',
      checkbox: {
        equals: true,
      },
    },
  })

  const posts = result.results.map((itemRaw) => {
    const item = itemRaw as PageObjectResponse
    // @ts-ignore
    const title = item.properties.Title.title[0].plain_text as string
    // @ts-ignore
    const cover = item.cover.external.url as string

    return {
      id: item.id,
      title,
      cover,
    }
  }) as Post[]

  return {
    ...result,
    posts,
  }
}

export default async function Blog() {
  const { posts } = await usePosts()

  return (
    <main className="min-h-screen p-24">
      <SectionIntro />
      <div className="flex flex-col gap-16">
        {posts.map((post) => (
          <div key={post.id}>
            {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
            <h2 className="text-2xl">{post.title}</h2>
            <div className="w-40 aspect-video overflow-hidden shadow-sm rounded-lg">
              <img
                alt="Cover image "
                src={post.cover}
                className=" object-cover "
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
