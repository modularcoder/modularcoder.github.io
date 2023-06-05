import './globals.css'
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
      <body className={`flex flex-col min-h-screen bg-zinc-50 dark:bg-black`}>
        <main className="container mx-auto bg-white shadow-sm min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
