import Link from 'next/link'
// import { useRouter } from 'next/router/navigation'

export default function Home() {
  // const router = useRouter();
  return (
    <>
      <h1>Hello</h1>
      <div>
        <Link href={'/home'}>
        <button>Home</button>
        </Link>
        <Link href={'/about'}>
        <button>About</button>
        </Link>
        <Link href={'/contact'}>
        <button>Contact</button>
        </Link>
        <Link href={'/blog'}>
        <button>Blog</button>
        </Link>
      </div>
    </>
  )
}
