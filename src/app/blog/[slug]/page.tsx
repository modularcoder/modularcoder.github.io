import Image from 'next/image'
import { Fragment } from 'react'
import { NextPage } from 'next'
import { usePostContent } from './_actions/usePostContent'
import { Comments } from './Comments/Comments'

type Props = {
  params: {
    slug: string
  }
}

const BlogPost: NextPage<Props> = async ({ params }) => {
  const { dateFormated, title, id, cover, blocks } = await usePostContent(
    params.slug
  )

  return (
    <div className="max-w-2xl mx-auto">
      <span>{dateFormated}</span>
      <article>
        <h1 className="text-5xl !leading-tight  font-bold tracking-tight  bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-500 break-words">
          {title}
        </h1>

        <div className=" relative w-full aspect-[3/1] overflow-hidden rounded-lg  mb-6  mt-6 ">
          <Image
            src={cover}
            className=" object-cover object-center m-auto !mt-0 !mb-0 "
            alt={`Coover image for ${title}`}
            fill={true}
          />
        </div>

        <div className="prose prose-zinc md:prose-lg lg:prose-xl">
          {blocks.map((block) => (
            <Fragment key={block.id}>{block.id}</Fragment>
          ))}
        </div>

        {/* <div dangerouslySetInnerHTML={{ __html: data.html }}></div> */}
        <div className=" mt-4 mb-4">
          <Comments id={id} title={title} />
        </div>
      </article>
    </div>
  )
}

export default BlogPost
