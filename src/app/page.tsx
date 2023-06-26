import Image from 'next/image'
import { SectionIntro } from './SectionIntro/SectionIntro'
import { SectionArticles } from './SectionArticles/SectionArticles'

export default function Home() {
  return (
    <main className="h-full">
      <SectionIntro />
      <SectionArticles />
    </main>
  )
}
