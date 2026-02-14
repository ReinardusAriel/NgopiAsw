import Card from "../components/Card"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MenuMinum from "../data/menuMinum.json"

function MenuMinuman({cart, setCart}) {

    const addToCart = (coffee) => {
      const exist = cart.find(x => x.id === coffee.id)

      if (exist) {
        setCart(
          cart.map(x =>
            x.id === coffee.id
              ? { ...x, qty: x.qty + 1 }
              : x
          )
        )
      } else {
        setCart([...cart, { ...coffee, qty: 1 }])
      }
    }

    return(
      <>
        <Navbar />

        <section className="min-h-screen bg-gray-50">
          
          {/* Header */}
          <div className="text-center py-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-amber-900 tracking-tight">
              ☕ Menu Minuman
            </h1>
            <p className="text-gray-500 mt-4 text-lg">
              Pilihan minuman terbaik untuk menemani harimu
            </p>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-6 pb-20">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {MenuMinum.map((coffee) => (
                <Card
                  key={coffee.id}
                  coffee={coffee}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </div>

        </section>

        <Footer />
      </>

        
    )
}

export default MenuMinuman