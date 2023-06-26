import Image from 'next/image'
import Link from 'next/link'
import { usePosts } from './_actions/usePosts'

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
