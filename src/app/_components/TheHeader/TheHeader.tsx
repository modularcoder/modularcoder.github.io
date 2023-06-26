import Link from 'next/link'

import { TheHeaderLogo } from './TheHeaderLogo'

const TheHeader = () => {
  return (
    <header
      className="
        p-4 px-10
        top-0 left-0 right-0
        fixed
        bg-white bg-opacity-70
        backdrop-blur-lg backdrop-opacity-40
        shadow-sm
        z-10

        flex flex-row justify-between items-center
      "
    >
      <Link href={'/'} className="group">
        <TheHeaderLogo />
      </Link>

      <nav className="text-2xl space-x-1 flex flex-row group text-zinc-600">
        <Link
          href={'/blog'}
          className="text-lg  font-bold inline-block px-4 py-1.5 rounded-lg transition hover:bg-pink-50 hover:text-pink-500 "
        >
          blog
        </Link>
        <Link
          href={'/projects'}
          className="text-lg  font-bold inline-block px-4 py-1.5 rounded-lg transition hover:bg-pink-50 hover:text-pink-500 "
        >
          demo projects
        </Link>
        <Link
          href={'/contact'}
          className="text-lg font-bold  inline-block px-4 py-1.5 rounded-lg transition hover:bg-pink-50 hover:text-pink-500"
        >
          let&apos;s work together
        </Link>
      </nav>
    </header>
  )
}

export default TheHeader
