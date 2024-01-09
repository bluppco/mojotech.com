import { useState, useEffect } from "react"

// IMPORT CONSTANTS
import { CDN_LINK } from "../../constants/cdn"

const Carousel = ( props ) => {

    const { data, showArrows, autoPlay, showDots } = props

    const images = data.images

    const [ currentIndex, setCurrentIndex ] = useState(0)

    const prev = () => {

        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
        setCurrentIndex( newIndex )

    }

    const next = () => {

        const isLastSlide = currentIndex === images.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex( newIndex )

    }

    const goToSlide = ( slideIndex ) => {

        setCurrentIndex( slideIndex )


    }

    {

        autoPlay === true &&

        useEffect( () => {

            const autoplayInterval = setInterval( () => {

            const nextIndex = ( currentIndex + 1 ) % images.length
            setCurrentIndex( nextIndex )

            }, 1500 )

            return () => clearInterval( autoplayInterval )

        }, [ currentIndex, images.length ])

    }

    return(
        <>
            <div className="relative overflow-hidden">
                <div className="relative">
                    {

                        images.map( ( value ) => {

                            return(
                                <div className="w-[800px] aspect-video relative">
                                    <img
                                        src={ CDN_LINK + value[ currentIndex ].file }
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )

                        })

                    }

                    <div className={` ${ showArrows ? "h-full flex items-center absolute top-0 left-6" : "hidden" } `}>
                        <div className="cursor-pointer bg-white rounded-full p-3" onClick={ prev }>
                            <img
                                src="/icons/prev.svg"
                                alt=""
                                className="w-6 aspect-square"
                            />
                        </div>
                    </div>
                    <div className={` ${ showArrows ? "h-full flex items-center absolute top-0 right-6" : "hidden" } `}>
                        <div className="cursor-pointer bg-white rounded-full p-3" onClick={ next }>
                            <img
                                src="/icons/next.svg"
                                alt=""
                                className="w-6 aspect-square"
                            />
                        </div>
                    </div>
                </div>
                <div className={` ${ showDots ? "flex justify-center gap-2 pt-4" : "hidden" } `}>
                    {

                        images.map( ( slide, slideIndex ) => {

                            return(
                                <div
                                    className={`cursor-pointer p-[5px] rounded-full text-4xl ${ currentIndex === slideIndex ? 'bg-zinc-600' : 'bg-zinc-200'}`}
                                    key={ slideIndex }
                                    onClick={ () => goToSlide( slideIndex ) }
                                >
                                </div>
                            )

                        })

                    }
                </div>
            </div>
        </>
    )

}

export default Carousel
