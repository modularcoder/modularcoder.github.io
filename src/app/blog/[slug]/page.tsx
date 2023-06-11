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
      <pre>{data.id}</pre>
      <article className="prose prose-zinc md:prose-lg lg:prose-xl">
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
      </article>
    </main>
  )
}

export default BlogPost
