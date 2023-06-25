'use client'

import { DiscussionEmbed } from 'disqus-react'

const Comments = ({ id, title }: { id: string; title: string }) => {
  const disqusShortname = 'gh-am'
  const disqusConfig = {
    url: `https://gh.am/blog/${id}`,
    identifier: id, // Single post id
    title: title, // Single post title
  }
  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
}
export { Comments }
