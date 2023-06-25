import Image from 'next/image'
import Link from 'next/link'
// import { getAllArticles } from './_utils/articles'
// import BagratJan from './_articles/2023-06-06-bagratjan.mdx'
// const articles = await getAllArticles()
import {
  queryPosts,
  type PageObjectResponse,
} from '@/app/blog/_services/notionService'
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
    const cover = item.cover?.external?.url as string | undefined

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
    <div>
      {/* Posts list */}
      <div className="flex flex-col gap-8 max-w-4xl mx-auto divide-y ">
        {posts.map((post) => (
          <div
            key={post.id}
            className="
                transition   py-6
              "
          >
            <div className="flex flex-row space-x-12">
              {/* Summary */}
              <div className="flex-1 flex flex-col space-y-8 ">
                <Link href={`/blog/${post.slug}`} className="group">
                  <h2
                    className=" mb-4
                      text-4xl font-semibold bg-clip-text
                      text-transparent bg-gradient-to-r
                      transition-colors
                      text-zinc-700
                      group-hover:text-pink-500
                    "
                  >
                    {/*           from-zinc-600 to-zinc-700
                      group-hover:from-pink-500
                      group-hover:to-blue-600 */}
                    {post.title}
                  </h2>
                  <p className="text-lg prose">{post.summary}</p>
                </Link>

                <Link
                  href={`/blog/${post.slug}`}
                  className="font-medium text-primary inline-flex underline-offset-3 hover:underline"
                >
                  Read more
                </Link>
              </div>
              {/* Cover */}
              <div className=" basis-60 w-60 self-start aspect-video overflow-hidden shadow-sm rounded transition-all ">
                {post.cover && (
                  <Link href={`/blog/${post.slug}`} className={'block'}>
                    <Image
                      alt="Cover image "
                      src={post.cover}
                      className=" object-cover "
                      width={240}
                      height={240}
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
