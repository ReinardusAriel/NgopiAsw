

function Card({coffee, addToCart}) {


    return(
        <div className="card bg-white w-75 h-100 shadow-sm hover:shadow-md transition">
            <figure>
                <img className="h-70"
                src={coffee.img}
                alt="minum" />
            </figure>
            <div className="card-body text-black">
                <h2 className="card-title">{coffee.title}</h2>
                <p>{coffee.desc}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-black">Rp. {coffee.price}</button>
                    <button className="btn btn-black" onClick={() => addToCart(coffee)}>add</button>
                </div>
            </div>
        </div>
    )
}

export default Card