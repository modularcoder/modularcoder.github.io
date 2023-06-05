import Link from 'next/link'

const BaseSocialLink = ({ icon: Icon, ...props }) => {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-primary dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default BaseSocialLink;
