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
    title: 'The post title',
    html: `<h2>Hello I need to be fetched from notion</h2>`,
  }
}
