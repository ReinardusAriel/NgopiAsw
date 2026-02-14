import AnimateCard from "../components/AnimateCard"
import Carousel from "../components/Carousel"
import Navbar from "../components/Navbar"

function AboutYou() {
    return(
        <>
            <Navbar />
            <Carousel />
            <div className="flex justify-center">
                <AnimateCard />
            </div>
            
        </>
        
    )
}

export default AboutYou