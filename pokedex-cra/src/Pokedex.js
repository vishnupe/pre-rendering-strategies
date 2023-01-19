import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";



export default function Pokedex() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const loader = async () => {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
            const responseJson = await response.json();
            const pokemons = responseJson.results;
            setPokemons(pokemons);
        };
        loader();
    }, []);
    return (
        <main className="flex-row ">
            <aside className="pokemon-list">
                <Link to="">
                    <h1>Pokemons</h1>
                </Link>
                <Link to="new">
                    <h1>Add new pokemon</h1>
                </Link>
                <ul>
                    {pokemons.map((pokemon) => (
                        <li key={pokemon.name}>
                            <Link to={`${pokemon.name}`} prefetch="intent" >
                                {pokemon.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
            <section className="pokemon-preview">
                <Outlet />
            </section>
        </main>

    );
}
