import Cart from "../components/Cart"
import Navbar from "../components/Navbar"

function Pesanan({cart, setCart}){


    return(
        <>
            <Navbar />
            <Cart cart={cart} setCart={setCart}/>
        </>
        
    )
}

export default Pesanan