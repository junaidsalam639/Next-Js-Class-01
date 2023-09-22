'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Page from './blogs/page';

export default function Home() {
  const router = useRouter();

  const blog = () => {
     router.push('/blogs')
  }
  return (
    <>
      <div>
        {/* <Page /> */}
        <Link href={'/check'}>
        <button className='rounded-md py-2 px-3 my-3 mx-3 bg-indigo-100 hover:bg-indigo-200 hover:transition-all font-bold text-indigo-400 border-indigo-800'>Home</button>
        </Link>
        <Link href={'/about'}>
        <button className='rounded-md py-2 px-3 my-3 mx-3 bg-indigo-100 hover:bg-indigo-200 hover:transition-all font-bold border-indigo-800 text-indigo-400'>About</button>
        </Link>
        <Link href={'/contact'}>
        <button className='rounded-md py-2 px-3 my-3 mx-3 bg-indigo-100 hover:bg-indigo-200 hover:transition-all font-bold border-indigo-800 text-indigo-400'>Contact</button>
        </Link>
        <button className='rounded-md py-2 px-3 my-3 mx-3 bg-indigo-100 hover:bg-indigo-200 hover:transition-all font-bold border-indigo-800 text-indigo-400' onClick={blog}>Blog</button>
      </div>
    </>
  )
}
// https://nerdcave.com/tailwind-cheat-sheet

