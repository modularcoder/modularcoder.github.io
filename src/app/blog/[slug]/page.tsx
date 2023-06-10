// import Image from 'next/image'
import { NextPage } from 'next'
import { query } from '@/app/_services/notionService'

type Props = {
  params: {
    slug: string
  }
}

const useData = async () => {
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

const BlogPost: NextPage<Props> = async ({ params }) => {
  const data = useData()

  return <main className="min-h-screen p-24">Blog Post {params.slug}</main>
}

export default BlogPost
