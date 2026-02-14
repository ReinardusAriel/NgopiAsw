function Gallery({img1, img2, img3, img4}) {
    return(
        <figure className="hover-gallery w-100 h-120 m-10 shadow-2xl">
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
        </figure>
    )
}

export default Gallery