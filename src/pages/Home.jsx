import Card from "../components/Card"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Window from "../components/Window"
import MenuMinuman from "../data/menuMinum.json"

function Home() {
  
  const minumanBest = MenuMinuman.filter(minum => minum.isBestSeller == true);

  return (
    <>
        <Navbar />
        <Hero />
        <div className="flex justify-center ">
          <Gallery img1="https://i.pinimg.com/1200x/06/c1/34/06c134a4782097d493986ea3d41ba01c.jpg" img2="https://i.pinimg.com/736x/91/ef/7c/91ef7c6d88a2216b50e6988e26190b3f.jpg"
          img3="https://i.pinimg.com/736x/ab/8b/af/ab8baf8537d6f2cef837f6def9afa985.jpg" img4="https://i.pinimg.com/736x/dc/9c/c0/dc9cc07ecd729f18d1f3ed667b8b02a5.jpg"/>
          <h1 className="w-150 pt-20 text-2xl text-yellow-900 font-medium">NgopiAsw lahir dari budaya ngopi sehari-hari yang santai, receh, dan penuh canda. 
            Terinspirasi dari meme legendaris Indonesia “ngeteh asu”, kami membawa semangat nongkrong apa adanya ke dalam setiap cangkir kopi. 
            Di sini, ngopi bukan soal ribet atau sok serius — tapi soal menikmati momen, ngobrol lepas, dan ketawa bareng.</h1>
        </div>
        <div className="flex justify-center ">
          <h1 className="w-150 pt-20 text-2xl text-yellow-900 font-medium">Kami percaya kopi itu harus enak, jujur, dan bikin betah. Dari kopi susu favorit sampai racikan khas yang bold dan nagih, NgopiAsw hadir sebagai teman setia buat kerja, nongkrong, nugas, atau sekadar kabur sebentar dari rutinitas.
            <br></br>
            <br></br>
            <em className="font-bold">NgopiAsw — kopi santai, rasa mantap, vibes asw.</em></h1>
          <Gallery img1="https://i.pinimg.com/736x/6a/62/91/6a6291a6f4cfb955c12cbfc87abb9c51.jpg" img2="https://i.pinimg.com/1200x/b4/22/cc/b422cc86ba9c186858392f5eb9aa690c.jpg"
          img3="https://i.pinimg.com/1200x/b1/0c/47/b10c477437fc84cc1082cfe669e6540d.jpg" img4="https://i.pinimg.com/736x/c0/61/74/c06174dac86fbcd48f0b86c250600e0f.jpg"/>
        </div>
        <h1 className="flex justify-center text-5xl text-yellow-900 m-10 font-bold">✨Best Seller✨</h1>
        <div className="flex justify-center gap-15 m-15">
          {minumanBest.map((minumanBes) => (
                <Card coffee={minumanBes} key={minumanBes.id}/>
            ))}
        </div>
        <Window />
        <Footer />

        {/* <Navbar />
        <div className="p-10">
          <Carousel />
        </div>
        <div className="flex justify-center ">
          <Gallery img1="https://i.pinimg.com/1200x/06/c1/34/06c134a4782097d493986ea3d41ba01c.jpg" img2="https://i.pinimg.com/736x/91/ef/7c/91ef7c6d88a2216b50e6988e26190b3f.jpg"
          img3="https://i.pinimg.com/736x/ab/8b/af/ab8baf8537d6f2cef837f6def9afa985.jpg" img4="https://i.pinimg.com/736x/dc/9c/c0/dc9cc07ecd729f18d1f3ed667b8b02a5.jpg"/>
          <h1 className="w-150 pt-20 text-2xl text-yellow-900 font-medium">NgopiAsw lahir dari budaya ngopi sehari-hari yang santai, receh, dan penuh canda. 
            Terinspirasi dari meme legendaris Indonesia “ngeteh asu”, kami membawa semangat nongkrong apa adanya ke dalam setiap cangkir kopi. 
            Di sini, ngopi bukan soal ribet atau sok serius — tapi soal menikmati momen, ngobrol lepas, dan ketawa bareng.</h1>
        </div>
        <div className="flex justify-center ">
          <h1 className="w-150 pt-20 text-2xl text-yellow-900 font-medium">Kami percaya kopi itu harus enak, jujur, dan bikin betah. Dari kopi susu favorit sampai racikan khas yang bold dan nagih, NgopiAsw hadir sebagai teman setia buat kerja, nongkrong, nugas, atau sekadar kabur sebentar dari rutinitas.
            <br></br>
            <br></br>
            <em className="font-bold">NgopiAsw — kopi santai, rasa mantap, vibes asw.</em></h1>
          <Gallery img1="https://i.pinimg.com/736x/6a/62/91/6a6291a6f4cfb955c12cbfc87abb9c51.jpg" img2="https://i.pinimg.com/1200x/b4/22/cc/b422cc86ba9c186858392f5eb9aa690c.jpg"
          img3="https://i.pinimg.com/1200x/b1/0c/47/b10c477437fc84cc1082cfe669e6540d.jpg" img4="https://i.pinimg.com/736x/c0/61/74/c06174dac86fbcd48f0b86c250600e0f.jpg"/>
        </div>
        <Hero />
        <Footer /> */}
    </>
  )
}

export default Home