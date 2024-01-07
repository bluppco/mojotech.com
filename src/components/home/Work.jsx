import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const Work = ( props ) => {

    const { data } = props

    return (
        <section className="container mx-auto px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg mac:max-w-screen-xl 2xl:max-w-screen-2xl pt-8 pb-40">
            <section className="grid grid-cols-2 gap-10">
                <div className="grid grid-cols-3 gap-10">
                    <div className="w-full h-96">
                        <Carousel showThumbs={ false } showStatus={ false } showArrows={ false } autoPlay={ true } infiniteLoop={ true } showIndicators={ false }>
                            {

                                data.map( ( value, index ) => {
                                    return (
                                        <div key={ "work-index-" + index } className="relative w-full">
                                            <div className="w-full h-60 bg-zinc-300 overflow-hidden">
                                                <img
                                                    src={ value }
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    )
                                })

                            }
                        </Carousel>
                    </div>
                    <div className="col-span-2">
                        <Carousel showThumbs={ false } showStatus={ false } showArrows={ false } autoPlay={ true } infiniteLoop={ true } showIndicators={ false }>
                            {

                                data.map( ( value, index ) => {
                                    return (
                                        <div key={ "work-index-" + index } className="relative w-full">
                                            <div className="w-full h-[500px] bg-zinc-300 overflow-hidden">
                                                <img
                                                    src={ value }
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
                <Carousel showThumbs={ false } showStatus={ false } showArrows={ false } autoPlay={ true } infiniteLoop={ true } showIndicators={ false }>
                    {

                        data.map( ( value, index ) => {
                            return (
                                <div key={ "work-index-" + index } className="relative w-full overflow-hidden">
                                    <div className="w-full aspect-square md:aspect-[3/2] bg-zinc-300 overflow-hidden">
                                        <img
                                            src={ value }
                                            className="object-cover w-full aspect-square md:aspect-auto md:w-[80%] object-bottom scale-100 group-hover:scale-110 duration-300"
                                        />
                                    </div>
                                </div>
                            )
                        })

                    }
                </Carousel>
            </section>
        </section>
    )

}

export default Work
