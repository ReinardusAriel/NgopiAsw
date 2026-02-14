import { useState } from "react";

function Card({coffee}) {

    const [order, setOrder] = useState(0);

    const addClick = () => {
      setOrder(order+1);
    }
    
    const minClick = () => {
      setOrder(order > 1 ? order-1 : 0);
    }

    return(
        <div className="card bg-yellow-900 w-75 h-100 shadow-xl hover:bg-yellow-700">
            <figure>
                <img className="h-70"
                src={coffee.img}
                alt="minum" />
            </figure>
            <div className="card-body text-orange-200">
                <h2 className="card-title">{coffee.title}</h2>
                <p>{coffee.desc}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-black" onClick={minClick}>-</button>
                    <button className="btn btn-black">Rp. {coffee.price} ({order})</button>
                    <button className="btn btn-black" onClick={addClick}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Card