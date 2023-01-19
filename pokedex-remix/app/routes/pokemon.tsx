import { json } from "@remix-run/node"; // or cloudflare/deno
import { Link, Outlet, ShouldRevalidateFunction, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  console.log("Pokemon list loaded")
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const responseJson = await response.json();
  const pokemons = responseJson.results;
  return json(pokemons);
};
export default function Index() {
  const pokemons: any[] = useLoaderData<typeof loader>();
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
export function ErrorBoundary() {
  return (
    <div className="error-container">{`There was an error loading pokemon list.`}</div>
  );
}
export const shouldRevalidate = (params: ShouldRevalidateFunction) => {
  console.log("Parent shouldRevalidate", params)
  return false
};