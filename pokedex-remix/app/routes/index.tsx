import { Link } from "@remix-run/react";

export default function Index() {
    return (
      <main>
          <Link to="pokemon">
            <h1>PokeDex</h1>
          </Link>
      </main>
  
    );
  }