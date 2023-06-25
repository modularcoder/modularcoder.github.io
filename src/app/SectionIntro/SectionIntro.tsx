import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '../_components/BaseSocialIcon'
import BaseSocialLink from '../_components/BaseSocialLink/BaseSocialLink'

const SectionHeader = () => {
  return (
    <section className="py-16 px-8 sm:py-40 sm:px-20">
      <div className="max-w-xl ">
        <div className="flex flex-row gap-6 items-center">
          <img
            src="profilePic.png"
            className="w-20 h-20 rounded-full shadow-sm"
            alt="Gevorg Harutyunyan profile picture"
          />
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-500 break-words ">
              Gevorg Harutyunyan
            </h1>
            <h2 className="text-2xl text-zinc-400 font-semibold tracking-tight ">
              Front End Engineer, Full Stack Developer
            </h2>
          </div>
        </div>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Hi, I’m Gevorg, a software engineer based in Armenia. I write about
          scalable and modular front-end, tech tooling, startups and system
          design. I’m also co-organizing regional JavaScript conferences{' '}
          {/* Working with
          companies from Canada, Finland, Australia, US, Czech Republic. */}
          <a className="BaseTextLink" href="https://jsconf.am">
            jsconf.am
          </a>
          ,{' '}
          <a className="BaseTextLink" href="https://reactconf.am">
            reactconf.am
          </a>
        </p>
        <div className="mt-6 flex gap-6">
          <BaseSocialLink
            href="https://twitter.com/modularcoder"
            aria-label="Follow on Twitter"
            icon={TwitterIcon}
          />
          <BaseSocialLink
            href="https://www.instagram.com/mad4extreme"
            aria-label="Follow on Instagram"
            icon={InstagramIcon}
          />
          <BaseSocialLink
            href="https://github.com/modularcoder"
            aria-label="Follow on GitHub"
            icon={GitHubIcon}
          />
          <BaseSocialLink
            href="https://www.linkedin.com/in/modularcoder"
            aria-label="Follow on LinkedIn"
            icon={LinkedInIcon}
          />
        </div>
      </div>
    </section>
  )
}

export default SectionHeader
