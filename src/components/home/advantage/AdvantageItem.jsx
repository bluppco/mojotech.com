// IMPORT JSX ATOMS
import H3JSX from "../../../atoms/headings/three/jsx"
import ParagraphJSX from "../../../atoms/paragraphs/large/jsx"

const AdvantageItem = ( props ) => {

    const { title, description } = props

    return(
        <div className="space-y-2">
            <H3JSX>{ title }</H3JSX>
            <ParagraphJSX>{ description }</ParagraphJSX>
        </div>

    )

}

export default AdvantageItem
