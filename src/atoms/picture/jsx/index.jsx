const Picture = ( props ) => {

    // GET PROPS
    const {

        alternative_text,
        CDN,
        image_width,
        PROJECT,
        source

    } = props

    return(
        <picture className="w-full h-full">
            <source media="(max-width: 375px)" srcSet={ CDN + PROJECT + "/" + source + "?height=300&quality=80" } />
            <source media="(max-width: 640px)" srcSet={ CDN + PROJECT + "/" + source + "?height=400&quality=80" } />
            <img
                alt={ alternative_text }
                className="w-full h-full object-cover"
                src={ CDN + PROJECT + "/" +  source + "?quality=80" + "&width=" + image_width }
            />
        </picture>
    )

}

export default Picture