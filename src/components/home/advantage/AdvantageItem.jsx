// IMPORT JSX ATOMS
import H3JSX from "../../../atoms/jsx/H3"
import ParagraphJSX from "../../../atoms/jsx/Paragraph"

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
