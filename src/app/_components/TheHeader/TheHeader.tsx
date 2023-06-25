import Image from 'next/image'
import Link from 'next/link'

const TheHeader: React.FC = () => {
  return (
    <header
      className="
        p-2 px-4
        top-0 left-0 right-0
        fixed
        bg-white bg-opacity-70
        backdrop-blur-lg backdrop-opacity-40
        shadow-sm
        z-10

        flex flex-row justify-between items-center
      "
    >
      <Link href={'/'}>
        <div className="flex flex-row gap-2 align-middle">
          <Image
            src="/profilePic.png"
            width={40}
            height={40}
            className="w-10 h-10 aspect-auto rounded-full shadow-sm"
            alt="Gevorg Harutyunyan profile picture"
          />
          <div>
            {/* <h2 className="text-lg leading-5">gh.am</h2> */}
            {/* <h3 className="text-xs text-slate-400">
              Front End Engineer, Full-Stack Developer
            </h3> */}
          </div>
        </div>
      </Link>

      <nav>
        <Link href={'/contact'}>Contact</Link>
        <Link href={'/blog'}>Blog</Link>
      </nav>
    </header>
  )
}

export default TheHeader
