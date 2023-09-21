import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <div>
        <Link href={'/check'}>
        <button>Home</button>
        </Link>
        <Link href={'/about'}>
        <button>About</button>
        </Link>
        <Link href={'/contact'}>
        <button>Contact</button>
        </Link>
        <Link href={'/blogs'}>
        <button>Blog</button>
        </Link>
      </div>
    </>
  )
}
