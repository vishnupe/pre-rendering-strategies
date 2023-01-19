import Link from "next/link";

async function fetchPokemons() {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const responseJson = await response.json();
    const pokemons = responseJson.results;
    return pokemons;
}
export default async function Index({
    children,
}: {
    children: React.ReactNode;
}) {
    const pokemons: any[] =  await fetchPokemons();
    return (
        <main className="flex-row ">
            <aside className="pokemon-list">
                <Link href="pokemon">
                    <h1>Pokemons</h1>
                </Link>
                <ul>
                    {pokemons.map((pokemon) => (
                        <li key={pokemon.name}>
                            <Link href={`pokemon/${pokemon.name}`}  >
                                {pokemon.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
            <section className="pokemon-preview">
                {
                    children
                }
            </section>
        </main>

    );
}