// import Image from 'next/image'
import { NextPage } from 'next'
import { usePostContent } from './_actions/usePostContent'

type Props = {
  params: {
    slug: string
  }
}

const BlogPost: NextPage<Props> = async ({ params }) => {
  const data = await usePostContent(params.slug)

  return (
    <main className="min-h-screen p-24">
      Blog Post {params.slug}
      <article
        className="prose prose-zinc md:prose-lg lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: data.html }}
      ></article>
    </main>
  )
}

export default BlogPost
