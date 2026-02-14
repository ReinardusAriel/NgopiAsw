function AnimateCard() {
    return(
        <a href="#" className="hover-3d my-12 mx-2 cursor-pointer">
  
            {/* content */}
            <div className="card w-150 h-100 bg-black text-white bg-[url(https://media.suara.com/pictures/653x366/2024/06/11/18470-cover-video-lagu-about-you-youtube-the-1975.jpg)]">
                <div className="card-body text-black">
                    <div className="flex justify-between mb-10">
                        <div className="font-bold">REINARDUS ARIEL JOAN ANANDIKA</div>
                        <div className="text-5xl opacity-40">☕</div>
                    </div>
                    <div className="text-lg mb-4 opacity-40">0821 8601 9648</div>
                    <div className="flex justify-between">
                        <div>
                        <div className="text-xs opacity-20">ref:</div>
                        <div>About You by the 1975</div>
                        </div>
                        <div>
                        <div className="text-xs opacity-20">MADE</div>
                        <div>2026</div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </a>
    )
}

export default AnimateCard