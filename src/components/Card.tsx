import "./Card.css"

function Card({title = "Hola", description = "Que tal"}) {
    return (
    <div className="Card">
        <h2>{title}</h2>
        <p>{description}</p>

    </div>)
}

export default Card;