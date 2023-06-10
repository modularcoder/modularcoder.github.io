import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename: string) {
  let { meta, default: component } = await import(
    `../_articles/${articleFilename}`
  )

  console.log('meta', meta)
  console.log('component', component)

  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  const articlesDir = path.join(process.cwd(), 'src/app/blog/_articles')

  console.log('articlesDir', articlesDir)

  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: articlesDir,
  })

  console.log('articleFilenames', articleFilenames)

  let articles = await Promise.all(articleFilenames.map(importArticle))
  // let articles: any = []
  // let articles = await Promise.all(articleFilenames.map(importArticle))
  // return articles
  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}
