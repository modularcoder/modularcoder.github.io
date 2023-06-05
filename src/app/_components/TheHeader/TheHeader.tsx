// import Image from 'next/image'

const TheHeader: React.FC = () => {
  return (
    <header className="p-2 px-4 bg-white shadow fixed top-0 left-0 right-0">
      <div className="flex flex-row gap-2 align-middle">
        <img
          src="profilePic.png"
          className="w-10 aspect-auto rounded-full shadow-sm"
          alt="Gevorg Harutyunyan profile picture"
        />
        <div>
          <h2 className="text-lg">Gevorg Harutyunyan</h2>
          <h3 className="text-xs text-slate-400">
            Front End Engineer, Full-Stack Developer
          </h3>
        </div>
      </div>
    </header>
  )
}

export default TheHeader
