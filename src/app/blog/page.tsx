import Image from 'next/image'
import Link from 'next/link'
// import { getAllArticles } from './_utils/articles'
// import BagratJan from './_articles/2023-06-06-bagratjan.mdx'
// const articles = await getAllArticles()
import {
  queryPosts,
  type PageObjectResponse,
} from '@/app/_services/notionService'
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
  slug: string
  summary?: string
}

const usePosts = async () => {
  const result = await queryPosts({
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

    // @ts-ignore
    const summary = item.properties.Summary.rich_text[0].plain_text as string

    const slugParts: string[] = item.url.split('/')
    const slug = slugParts[slugParts.length - 1].toLocaleLowerCase()

    return {
      id: item.id,
      title,
      cover,
      slug,
      summary,
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
    <div className="flex flex-col gap-4 max-w-xl ">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug}`}
          className="rounded-xl hover:bg-primary-50 bg-opacity-30 p-5 transition-colors"
        >
          <div>
            {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
            <h2 className="text-2xl">{post.title}</h2>
            <div className="w-40 aspect-video overflow-hidden shadow-sm rounded ">
              {post.cover && (
                <img
                  alt="Cover image "
                  src={post.cover}
                  className=" object-cover "
                />
              )}
            </div>
            <p>{post.summary}</p>
            <strong className="font-medium text-primary ">Read the post</strong>
          </div>
        </Link>
      ))}
    </div>
  )
}
