const CarouselProgressBar = () => {

    return(
        <div className="group relative">
            <div className="bg-mojo_dark_green/20 h-1 w-20"></div>
            <div className="w-0 bg-mojo_dark_green group-hover:w-20 h-1 transition-width duration-1000 ease-in absolute top-0"></div>
        </div>
    )

}

export default CarouselProgressBar
