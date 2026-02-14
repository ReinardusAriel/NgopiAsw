import { Link } from "react-router-dom"

function Hero() {
    return(
    <div className="relative hero mb-20 min-h-screen overflow-hidden">
  
        {/* Background Blur */}
        <div
            className="absolute inset-0 bg-[url('https://www.coffeebean.com/cdn/shop/collections/CBTL_W5_All_5_Drinks_V1.png?v=1767804947&width=1080')]
                    bg-cover bg-center blur-s scale-110"
        ></div>

        {/* Overlay gelap biar teks kebaca */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Konten */}
        <div className="relative hero-content flex-col lg:flex-row-reverse z-10">
            <img
            src="https://i.pinimg.com/1200x/26/01/f9/2601f9724122ee9b2f14986ac9536cd4.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="text-orange-200">
                <h1 className="text-5xl font-bold">Ngopi santai, vibes asw.</h1>
                <p className="py-6 text-xl">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn"><Link to="/MenuMinuman">Liat Menu</Link></button>
            </div>
        </div>

    </div>

    )
}

export default Hero