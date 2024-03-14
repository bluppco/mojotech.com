// IMPORTS ATOMS
import CarouselProgressBar from "@/atoms/home/clients/testimonials/carousel-progress-bar/index.jsx"
import PictureContain from "@/atoms/picture/contain/jsx/index.jsx"

const Testimonials = ( props ) => {

    const {

        alternative_text,
        author_designation,
        author_name,
        CDN,
        PROJECT,
        review,
        source

    } = props

    return(
        <div className="space-y-10 bg-mojo_zinc px-4 py-10 md:p-20">
            <p className="text-xl md:text-2xl font-gt_america_light text-left">“{ review }”</p>
            <div className="flex flex-col md:flex-row gap-2 md:gap-10 md:items-center">
                <div className="w-40 aspect-video">
                    <PictureContain
                        alternative_text={ alternative_text }
                        CDN={ CDN }
                        PROJECT={ PROJECT }
                        source={ source }
                    />
                </div>
                <div>
                    <p className="text-lg text-emerald-600 font-gt_america_light text-left">{ author_name }</p>
                    <p className="text-lg text-emerald-600/50 font-gt_america_light text-left">{ author_designation }</p>
                </div>
            </div>
            <section className="flex gap-2">
                <CarouselProgressBar />
                <CarouselProgressBar />
                <CarouselProgressBar />
                <CarouselProgressBar />
                <CarouselProgressBar />
                <CarouselProgressBar />
                <CarouselProgressBar />
            </section>
        </div>
    )

}

export default Testimonials
