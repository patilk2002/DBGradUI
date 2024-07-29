function Item({item}){
    return(
        <li className="todo_item">
            <button className="todos_items_left">
                <p>{item?.title}</p>
            </button>
            <div>
                <button><span className="visually-hidden">
                    Edit</span></button> 
                <button><span className="visually-hidden">
                Delete</span></button>           
            </div>
        </li>
    )
}

export default Item