import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href="pokemon">
        <h1>PokeDex</h1>
      </Link>
    </main>
  )
}
