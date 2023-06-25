import './main.css'
// import { Roboto } from 'next/font/google'

// const roboto = Roboto({
//   weight: ['300', '400', '500', '700', '900'],
//   subsets: ['latin'],
// })

// ${roboto.className}

import TheHeader from './_components/TheHeader/TheHeader'

export const metadata = {
  title: 'Gevorg Harutyunyan - Front-End Enginer, Full-Stack Developer',
  description: 'Writing about front-end, system design, coding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="min-h-screen antialiased">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#ffc40d" />
      <meta name="theme-color" content="#ffffff"></meta>
      <body className={`flex flex-col min-h-screen bg-zinc-50 dark:bg-black`}>
        <TheHeader />
        <main className="container mx-auto bg-white shadow-sm min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
