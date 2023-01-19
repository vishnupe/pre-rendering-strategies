import Pokemon from "@/components/pokemon";
import Link from "next/link";

export default function Index({
    pokemons,
    pokemon
}: {
    pokemons: any[],
    pokemon: any
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
            <Pokemon name={pokemon.name} image={pokemon.sprites.other['official-artwork'].front_default} />
                {/* <div>
                    <h1>{pokemon.name}</h1>
                    <Image src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} width={475} height={475} />
                </div> */}
            </section>
        </main>

    );
}

export async function getServerSideProps({params}: {params: any}) {
    const pokemonListResponse = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const responseJson = await pokemonListResponse.json();
    const pokemons = responseJson.results;
    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
    const pokemon = await pokemonResponse.json();
    return { props: { pokemons, pokemon } };
}