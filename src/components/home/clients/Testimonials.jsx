const Testimonials = ( props ) => {

    const {

        author_name,
        author_designation,
        src,
        alt,
        review

    } = props

    return(
        <div className="space-y-10 bg-mojo_zinc p-20">
            <p className="text-2xl font-gt_america_light">“{ review }”</p>
            <div className="flex gap-10 items-center">
                <div className="w-40 aspect-video bg-zinc-200">
                    <img
                        src={ src }
                        alt={ alt }
                        className="w-40 aspect-video"
                    />
                </div>
                <div>
                    <p className="text-lg text-emerald-600 font-gt_america_light text-left">{ author_name }</p>
                    <p className="text-lg text-emerald-600/50 font-gt_america_light">{ author_designation }</p>
                </div>
            </div>
        </div>
    )

}

export default Testimonials
