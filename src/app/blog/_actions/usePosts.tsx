import {
  queryPosts,
  type PageObjectResponse,
} from '@/app/blog/_services/notionService'

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
    const cover =
      // @ts-ignore
      (item.cover?.external?.url as string | undefined) ||
      // @ts-ignore
      (item.cover?.file?.url as string | undefined)

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

export { usePosts }
