import Link from 'next/link'

// Font files can be colocated inside of `pages`
export default function Home() {
  return (
    <>
      <main>
        <Link href="pokemon">
          <h1>PokeDex</h1>
        </Link>
      </main>
    </>
  )
}
