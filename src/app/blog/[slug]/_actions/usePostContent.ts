import { remark } from 'remark'
import html from 'remark-html'
import { query } from '@/app/_services/notionService'

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
    html: `<h1>Hello</h1>`,
  }
}
