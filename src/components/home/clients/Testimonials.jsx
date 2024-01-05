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
            <p className="text-2xl">“{ review }”</p>
            <div className="flex gap-10 items-center">
                <div className="w-40 aspect-video bg-zinc-200">
                    <img
                        src={ src }
                        alt={ alt }
                        className="w-40 aspect-video"
                    />
                </div>
                <div>
                    <p className="text-lg text-emerald-600">{ author_name }</p>
                    <p className="text-lg text-emerald-600/50">{ author_designation }</p>
                </div>
            </div>
        </div>
    )

}

export default Testimonials
