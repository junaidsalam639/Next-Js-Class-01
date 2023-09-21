import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>
        <Link href={'/check'}>
        <button className='py-2 px-3 my-3 mx-3 bg-green-300 text-blue-400 font-bold border-4'>Home</button>
        </Link>
        <Link href={'/about'}>
        <button className='py-2 px-3 my-3 mx-3 bg-green-300 text-blue-400 font-bold border-4'>About</button>
        </Link>
        <Link href={'/contact'}>
        <button className='py-2 px-3 my-3 mx-3 bg-green-300 text-blue-400 font-bold border-4'>Contact</button>
        </Link>
        <Link href={'/blogs'}>
        <button className='py-2 px-3 my-3 mx-3 bg-green-300 text-blue-400 font-bold border-4'>Blog</button>
        </Link>
      </div>
    </>
  )
}
// https://nerdcave.com/tailwind-cheat-sheet