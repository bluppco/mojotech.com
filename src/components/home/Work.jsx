import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

// IMPORT CONSTANTS
import { CDN_LINK, IMAGE_QUALITY } from "../../constants/cdn"

const Work = ( props ) => {

    const { carousel_one, carousel_two, carousel_three } = props

    return (
        <section className="container mx-auto px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg mac:max-w-screen-xl 2xl:max-w-screen-2xl pt-8 pb-40">
            <section className="grid grid-cols-2 gap-10">
                <div className="grid grid-cols-3 gap-10">
                    <div className="w-full h-96 flex flex-col justify-end">
                        <Carousel showThumbs={ false } showStatus={ false } showArrows={ false } autoPlay={ true } infiniteLoop={ true } showIndicators={ false }>
                            {

                                carousel_one.images.map( ( value, index ) => {
                                    return (
                                        <div key={ "carousel-one-" + index } className="relative w-full">
                                            <div className="w-full h-60 bg-zinc-300 overflow-hidden">
                                                <img
                                                    src={ CDN_LINK + value.file + "?quality=" + IMAGE_QUALITY }
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    )
                                })

                            }
                        </Carousel>
                    </div>
                    <div className="col-span-2 flex flex-col justify-end mb-28">
                        <Carousel showThumbs={ false } showStatus={ false } showArrows={ false } autoPlay={ true } infiniteLoop={ true } showIndicators={ false }>
                            {

                                carousel_two.images.map( ( value, index ) => {
                                    return (
                                        <div key={ "carousel-two-" + index } className="relative w-full">
                                            <div className="w-full h-[500px] bg-zinc-300 overflow-hidden">
                                                <img
                                                    src={ CDN_LINK + value.file + "?quality=" + IMAGE_QUALITY }
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    )
                                })

                            }
                        </Carousel>
                    </div>
                </div>
                <div className="flex flex-col justify-end">
                    <Carousel showThumbs={ false } showStatus={ false } showArrows={ false } autoPlay={ true } infiniteLoop={ true } showIndicators={ false }>
                        {

                            carousel_three.images.map( ( value, index ) => {
                                return (
                                    <div key={ "carousel-three-" + index } className="relative w-full overflow-hidden">
                                        <div className="w-full aspect-square md:aspect-[3/2] bg-zinc-300 overflow-hidden">
                                            <img
                                                src={ CDN_LINK + value.file + "?quality=" + IMAGE_QUALITY }
                                                className="object-cover w-full aspect-square md:aspect-auto md:w-[80%] object-bottom scale-100 group-hover:scale-110 duration-300"
                                            />
                                        </div>
                                    </div>
                                )
                            })

                        }
                    </Carousel>
                </div>
            </section>
        </section>
    )

}

export default Work
