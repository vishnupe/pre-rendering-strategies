import Image from "next/image";

export default function Pokemon({ name, image }: { name: string, image: string }) {
    const choose = () => alert(`${name}.. I choose you...`);
    return <div onClick={choose}>
        <h1>{name}</h1>
        <img src={image} alt={name} width={475} height={475}/>
    </div>
}