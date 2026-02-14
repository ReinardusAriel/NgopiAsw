import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MenuMakan from "../data/menuMakan.json"

function MenuMakanan() {


    return(
        <>
            <Navbar />
            <h1 className="flex justify-center text-6xl p-10 text-yellow-900 font-bold">☕Menu Makanan☕</h1>
            <div className="grid grid-cols-4 content-start gap-10 p-10">
                {MenuMakan.map((coffee) =>(
                    <Card coffee={coffee} key={coffee.id}/>
                ))} 
            </div>
            <Footer />
        </>
        
    )
}

export default MenuMakanan