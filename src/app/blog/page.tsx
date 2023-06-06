import Image from 'next/image'
import { getAllArticles } from './_utils/articles'

export default async function Blog() {
  console.log('bubu')

  const articles = await getAllArticles()

  console.log('articles', articles)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {articles.map((article) => (
        <div key={article.date}>{article.description}</div>
      ))}
    </main>
  )
}
