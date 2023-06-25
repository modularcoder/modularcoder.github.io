import Image from 'next/image'
import { Fragment } from 'react'
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
    <div>
      <span>{data.dateFormated}</span>
      <article className="prose prose-zinc md:prose-lg lg:prose-xl">
        <h1>{data.title}</h1>

        <div className=" relative w-full aspect-[3/1] overflow-hidden rounded-lg  mb-6  ">
          <Image
            src={data.cover}
            className=" object-cover object-center m-auto !mt-0 !mb-0 "
            alt={`Coover image for ${data.title}`}
            fill={true}
          />
        </div>

        {data.blocks.map((block) => (
          <Fragment key={block.id}>{block.id}</Fragment>
        ))}

        <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
      </article>
    </div>
  )
}

export default BlogPost
