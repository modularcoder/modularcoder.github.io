import Image from 'next/image'
import Link from 'next/link'
import { SectionIntro } from './SectionIntro/SectionIntro'
import { SectionArticles } from './SectionArticles/SectionArticles'
import { SectionSubscribe } from './SectionSubscribe/SectionSubscribe'
import { SectionWork } from './SectionWork/SectionWork'
import { usePosts } from './blog/_actions/usePosts'

export default async function Home() {
  const { posts } = await usePosts()
  const postsRecent = posts.slice(0, 3)

  return (
    <main className="min-h-full pb-10">
      <SectionIntro />
      <div className="container mx-auto mb-40">
        <header className="mb-20">
          <div>
            <h2 className="sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-500 inline ">
              Recent articles
            </h2>
          </div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            I write about front-end, tech tooling, startups and system design...
          </p>
        </header>

        <div className="grid grid-cols-3 gap-16 mb-16">
          {postsRecent.map((post) => (
            <Link href={`/blog/${post.slug}`} className="group" key={post.id}>
              <div
                className="
                transition p-6 hover:bg-zinc-100 rounded-2xl
              "
              >
                {/* Summary */}
                <div className="space-y-8">
                  {/* Cover */}
                  <div className=" w-full relative pb-[40%]  overflow-hidden shadow-sm rounded-lg transition-all ">
                    {post.cover && (
                      <Link href={`/blog/${post.slug}`} className={'block'}>
                        <Image
                          alt="Cover image "
                          src={post.cover}
                          className=" object-cover "
                          fill={true}
                        />
                      </Link>
                    )}
                  </div>

                  <h2
                    className=" mb-4
                      text-2xl font-semibold bg-clip-text
                      text-transparent bg-gradient-to-r
                      transition-colors
                      text-zinc-700
                      group-hover:text-pink-500
                    "
                  >
                    {post.title}
                  </h2>
                  <p className="text-lg prose">{post.summary}</p>

                  <span className="font-medium transition group-hover:text-primary inline-flex underline-offset-3 hover:underline">
                    Read more
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <footer className="text-center py-6">
          <Link
            href={`/blog`}
            className=" px-6 py-4 rounded-xl bg-gradient-to-br from-pink-500 to-pink-400 text-white text-xl font-bold"
          >
            View All Articles
          </Link>
        </footer>
      </div>
      <div className="container mx-auto grid grid-cols-5 gap-20">
        <div className="col-span-3">
          <SectionArticles />
        </div>
        <div className="col-span-2 space-y-10 ">
          <div className="p-8 rounded-2xl  bg-white shadow">
            <SectionSubscribe />
          </div>

          <div className="p-8 rounded-2xl  bg-white shadow">
            <SectionWork />
          </div>
        </div>
      </div>
    </main>
  )
}
