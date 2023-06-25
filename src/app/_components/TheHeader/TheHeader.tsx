import Image from 'next/image'
import Link from 'next/link'

const TheHeader: React.FC = () => {
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
        <div className="flex flex-row gap-4 align-middle justify-center items-center">
          <span className=" text-4xl text-zinc-200 group-hover:-translate-x-1 transition  group-hover:text-pink-400">
            &#123;
          </span>
          <Image
            src="/profilePic.png"
            width={40}
            height={40}
            className="w-10 h-10 aspect-auto rounded-full shadow-sm"
            alt="Gevorg Harutyunyan profile picture"
          />
          <div className="flex flex-row gap-2 items-center">
            <h2
              className="
                mr-1.5
                text-2xl font-bold
                tracking-tight

              "
            >
              <span
                className="
                text-pink-400
                  delay-150 ease-in-out
                "
              >
                gh
              </span>
              <span className="text-zinc-300">.am</span>
            </h2>
            <span className="text-4xl text-zinc-200 group-hover:translate-x-1 transition  group-hover:text-pink-400">
              &#125;
            </span>
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
