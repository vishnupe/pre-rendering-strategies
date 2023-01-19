import { ActionArgs, redirect } from "@remix-run/node";
import { Form, useTransition } from "@remix-run/react";
import Pokemon from "~/components/pokemon";

export const action = async ({ request }: ActionArgs) => {
    const form = await request.formData();
    const name = form.get("name");
    const image = form.get("image");
    // we do this type check to be extra sure and to make TypeScript happy
    if (
        typeof name !== "string" ||
        typeof image !== "string"
    ) {
        throw new Error(`Form not submitted correctly.`);
    }

    const fields = { name, image };
    console.log('Created pokemon', fields);
    return redirect(`/pokemon/shellder`);
};

export default function NewPokemonRoute() {
    const transition = useTransition();
    if (transition.submission) {
        const name = transition.submission.formData.get("name");
        const image =
            transition.submission.formData.get("image");
        if (
            typeof name === "string" &&
            typeof image === "string"
        ) {
            return (
                <Pokemon
                    name={name}
                    image={image}
                />
            );
        }
    }


    return (
        <div>
            <p>Add your own pokemon</p>
            <Form replace method="post">
                <div>
                    <label>
                        Name: <input type="text" name="name" defaultValue={"shellder"} />
                    </label>
                </div>
                <div>
                    <label>
                        Image: <textarea name="image" defaultValue={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png"}/>
                    </label>
                </div>
                <div>
                    <button type="submit" className="button">
                        Add
                    </button>
                </div>
            </Form>
        </div>
    );
}
export function ErrorBoundary() {
    return (
        <div className="error-container">{`There was an error careating pokemon.`}</div>
    );
}