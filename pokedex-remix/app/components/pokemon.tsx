export default function Pokemon({ name, image }: { name: string, image: string }) {
    const choose = () => alert(`${name}.. I choose you...`);
    return <div onClick={choose}>
        <h1>{name}</h1>
        <img src={image} alt={name} />
    </div>
}