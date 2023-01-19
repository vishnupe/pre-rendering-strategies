import Link from "next/link";

export default function Index({
    pokemons,
}: {
    pokemons: any[]
}) {
    return (
        <main className="flex-row ">
            <aside className="pokemon-list">
                <Link href="/pokemon/">
                    <h1>Pokemons</h1>
                </Link>
                <ul>
                    {pokemons.map((pokemon) => (
                        <li key={pokemon.name}>
                            <Link href={`/pokemon/${pokemon.name}`}  >
                                {pokemon.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
            <section className="pokemon-preview">
                Select a pokemon
            </section>
        </main>

    );
}

export async function getServerSideProps() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const responseJson = await response.json();
    const pokemons = responseJson.results;

    return { props: { pokemons } };
}