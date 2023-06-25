import TheHeader from '@/app/_components/TheHeader/TheHeader'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className=" py-20 px-10 ">
      <div className="min-h-screen">{children}</div>
    </main>
  )
}
