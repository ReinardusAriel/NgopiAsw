import Card from "./Card"

function Cart({cart, setCart}){

    const removeItem = (id) => {
        setCart(cart.filter(coffee => coffee.id !== id))
    }

    const total = cart.reduce((acc, coffee) => acc + coffee.price * coffee.qty, 0)
    
    return(
        <div className="min-h-screen bg-gray-50 flex flex-col">

            {/* TITLE */}
            <div className="py-10 text-center">
                <h2 className="text-5xl font-bold text-yellow-900">
                Your Cart ☕
                </h2>
                <p className="text-gray-500 mt-2">
                Review your selected items before checkout
                </p>
            </div>

            {/* CART CONTENT */}
            <div className="flex-1 max-w-4xl mx-auto w-full px-6 pb-40">
                {cart.length === 0 ? (
                <div className="text-center text-gray-400 text-xl mt-20">
                    Your cart is empty.
                </div>
                ) : (
                cart.map((coffee) => (
                    <div
                        key={coffee.id}
                        className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-5 mb-4 flex items-center justify-between"
                    >
                    <div className="flex items-center gap-4">
                        <img
                        src={coffee.img}
                        className="w-16 h-16 object-cover rounded-lg"
                        alt={coffee.title}
                        />

                        <div>
                            <h3 className="font-semibold text-lg text-yellow-900">
                                {coffee.title}
                            </h3>
                            <p className="text-yellow-900 text-sm">
                                Qty: {coffee.qty}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <p className="font-bold text-yellow-900 text-lg">
                        Rp {coffee.price * coffee.qty}
                        </p>

                        <button
                        onClick={() => removeItem(coffee.id)}
                        className="text-red-500 hover:text-red-700 transition"
                        >
                        Remove
                        </button>
                    </div>
                    </div>
                ))
                )}
            </div>

            <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg">
                <div className="max-w-4xl mx-auto flex justify-between items-center p-6">
                
                <div>
                    <p className="text-gray-500 text-sm">Total Payment</p>
                    <h3 className="text-2xl font-bold text-yellow-900">
                    Rp {total}
                    </h3>
                </div>

                <button className="bg-yellow-900 text-white px-6 py-3 rounded-xl hover:bg-yellow-800 transition shadow-md">
                    Checkout
                </button>

                </div>
            </div>

        </div>



        
    )
}

export default Cart