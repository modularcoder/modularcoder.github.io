import TheHeader from '@/app/_components/TheHeader/TheHeader'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <TheHeader />
      <div className="min-h-screen p-24">{children}</div>
    </main>
  )
}
