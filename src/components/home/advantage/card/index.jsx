// IMPORTS ATOMS
import HeadingThree from "@/atoms/headings/three/jsx/index.jsx"
import ParagraphLarge from "@/atoms/paragraphs/large/jsx/index.jsx"
import PictureContain from "@/atoms/picture/contain/jsx"

const AdvantageCard = ( props ) => {

    // GET PROPS
    const {

        CDN,
        description,
        PROJECT,
        source,
        title

    } = props

    return(
        <div className="space-y-2">
            <div className="size-16 mb-6">
                <PictureContain
                    alternative_text={ title }
                    CDN={ CDN }
                    image_width=""
                    PROJECT={ PROJECT }
                    source={ source }
                />
            </div>
            <HeadingThree>{ title }</HeadingThree>
            <ParagraphLarge>{ description }</ParagraphLarge>
        </div>

    )

}

export default AdvantageCard
