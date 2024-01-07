// IMPORT JSX ATOMS
import H3JSX from "../../../atoms/jsx/H3"
import ParagraphJSX from "../../../atoms/jsx/Paragraph"

const AdvantageItem = ( props ) => {

    const {

        src,
        alt,
        title,
        description

    } = props

    return(
        <div className="flex items-center justify-between border-b border-zinc-200 pb-10">
            <div className="flex gap-4">
                <div className="size-8 bg-zinc-200">
                    <img
                        src={ src }
                        alt={ alt }
                        className="size-8"
                    />
                </div>
                <H3JSX>{ title }</H3JSX>
                <ParagraphJSX>{ description }</ParagraphJSX>
            </div>
            <span>+</span>
        </div>
    )

}

export default AdvantageItem
