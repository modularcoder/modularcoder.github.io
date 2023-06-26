import {
  queryPost,
  type PageObjectResponse,
  queryPostBlocks,
} from '@/app/blog/_services/notionService'
// import { remark } from 'remark'
// import html from 'remark-html'
// import { queryPosts } from '@/app/_services/notionService'

// const useData = async () => {
//   const result = await query({
//     filter: {
//       property: 'Is published',
//       checkbox: {
//         equals: true,
//       },
//     },
//   })

//   return result
// }

export async function usePostContent(slug: string) {
  const slugParts = slug.split('-')
  const postId = slugParts[slugParts.length - 1] as string

  const metadataRes = await queryPost(postId)
  const blocksRes = await queryPostBlocks(postId)

  console.log('blocksRes', blocksRes)

  // @ts-ignore
  const date = new Date(metadataRes.properties.Date.date.start) as Date

  const dateFormated = new Intl.DateTimeFormat('en-us').format(date)

  // @ts-ignore
  const title = metadataRes.properties.Title.title[0].plain_text as string

  const cover =
    // @ts-ignore
    (metadataRes.cover?.external?.url as string | undefined) ||
    // @ts-ignore
    (metadataRes.cover?.file?.url as string | undefined)

  // const fullPath = path.join(postsDirectory, `${id}.md`);
  // const fileContents = fs.readFileSync(fullPath, 'utf8');

  // // Use gray-matter to parse the post metadata section
  // const matterResult = matter(fileContents);

  // // Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResult.content)
  // const contentHtml = processedContent.toString()

  // // Combine the data with the id and contentHtml
  // return {
  //   id,
  //   contentHtml,
  //   ...matterResult.data,
  // }

  return {
    id: postId,
    title,
    cover,
    date,
    dateFormated,
    html: `<h2>Hello I need to be fetched from notion</h2>`,
    blocks: blocksRes.results,
  }
}
