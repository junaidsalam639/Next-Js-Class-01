'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  const blog = () => {
     router.push('/blogs')
  }
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
        <button className='py-2 px-3 my-3 mx-3 bg-green-300 text-blue-400 font-bold border-4' onClick={blog}>Blog</button>
      </div>
    </>
  )
}
// https://nerdcave.com/tailwind-cheat-sheet