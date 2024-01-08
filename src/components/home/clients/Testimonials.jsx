// IMPORT CONSTANTS
import { CDN_LINK, IMAGE_QUALITY } from "../../../constants/cdn"

const Testimonials = ( props ) => {

    const {

        author_name,
        author_designation,
        src,
        alt,
        review

    } = props

    return(
        <div className="space-y-10 bg-mojo_zinc px-4 py-10 md:p-20">
            <p className="text-xl md:text-2xl font-gt_america_light text-left">“{ review }”</p>
            <div className="flex flex-col md:flex-row gap-2 md:gap-10 md:items-center">
                <div className="w-40 aspect-video bg-zinc-200">
                    <img
                        src={ CDN_LINK + src + "?quality=" + IMAGE_QUALITY }
                        alt={ alt }
                        className="w-40 aspect-video"
                    />
                </div>
                <div>
                    <p className="text-lg text-emerald-600 font-gt_america_light text-left">{ author_name }</p>
                    <p className="text-lg text-emerald-600/50 font-gt_america_light text-left">{ author_designation }</p>
                </div>
            </div>
        </div>
    )

}

export default Testimonials
