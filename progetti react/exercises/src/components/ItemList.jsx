const ItemList = () => {
    const colors= ["red", "yellow","blue" ]

    return (
        <>
        <ul>
        {
            colors.map((color,items)=>(
                <li key={color-items}>{color}</li>
            ))
        }
        </ul>
        </>
    )
}
export default ItemList;