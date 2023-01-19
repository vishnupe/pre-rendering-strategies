import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Pokemon() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    useEffect(() => {
        const loader = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const pokemon = await response.json();
            setPokemon(pokemon);
        };
        loader();
    }, [name]);
    const choose = () => alert(`${name}.. I choose you...`);
    return pokemon ? <div onClick={choose}>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} width={475} height={475}/>
    </div> : <div>Loading...</div>
}