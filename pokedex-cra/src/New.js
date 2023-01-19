function New() {
    return <div>
        <p>Add your own pokemon</p>
        <form replace method="post">
            <div>
                <label>
                    Name: <input type="text" name="name" defaultValue={"shellder"} />
                </label>
            </div>
            <div>
                <label>
                    Image: <textarea name="image" defaultValue={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png"} />
                </label>
            </div>
            <div>
                <button type="submit" className="button">
                    Add
                </button>
            </div>
        </form>
    </div>
}
export default New;