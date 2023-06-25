import Image from 'next/image'
import Link from 'next/link'

const TheHeader: React.FC = () => {
  return (
    <header
      className="
        p-2 px-4
        fixed top-0 left-0 right-0
        bg-white bg-opacity-80
        backdrop-blur-lg backdrop-opacity-40
        shadow-sm
        z-10
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
            <h2 className="text-lg leading-5">Gevorg Harutyunyan</h2>
            <h3 className="text-xs text-slate-400">
              Front End Engineer, Full-Stack Developer
            </h3>
          </div>
        </div>
      </Link>
    </header>
  )
}

export default TheHeader
