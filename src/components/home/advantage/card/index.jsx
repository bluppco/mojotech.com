// IMPORTS ATOMS
import HeadingThree from "@/atoms/headings/three/jsx/index.jsx"
import ParagraphLarge from "@/atoms/paragraphs/large/jsx/index.jsx"

const AdvantageCard = ( props ) => {

    // GET PROPS
    const {

        description,
        title

    } = props

    return(
        <div className="space-y-2">
            <HeadingThree>{ title }</HeadingThree>
            <ParagraphLarge>{ description }</ParagraphLarge>
        </div>

    )

}

export default AdvantageCard
