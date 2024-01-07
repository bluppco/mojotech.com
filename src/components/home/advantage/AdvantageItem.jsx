import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// IMPORT JSX ATOMS
import H3JSX from "../../../atoms/jsx/H3"
import ParagraphJSX from "../../../atoms/jsx/Paragraph"

const Accordion = ( props ) => {

    const { expand, updateExpand, value, index } = props
    const isOpen = index === expand

    return (
        <section className="flex items-start border-b border-zinc-200 py-8">
            <motion.section
                initial={ false }
                onClick={() => updateExpand(isOpen ? false : index )}
                className="p-2 md:p-4 cursor-pointer flex items-center gap-4"
            >
                <div className="size-12">
                    <img
                        className="size-12"
                        src={ value.src }
                        alt={ value.alt }
                    />
                </div>
                <div className="flex-wrap">
                    <H3JSX>{ value.title }</H3JSX>
                </div>
            </motion.section>
            <div className="pl-40 pt-6">
                <AnimatePresence initial={ false }>
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate={ isOpen ? "open" : "collapsed" }
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <ParagraphJSX>{ value.description }</ParagraphJSX>
                    </motion.div>
                </AnimatePresence>
            </div>
            <motion.section
                initial={ false }
                onClick={() => updateExpand(isOpen ? false : index )}
                className="p-2 md:p-4 cursor-pointer flex items-center gap-4"
            >
                <div className="w-8 md:w-12 aspect-square">
                    <div className="w-8 md:w-12 aspect-square rounded-full flex justify-center items-center">
                        <motion.img
                            className={`${ isOpen ? "rotate-180": "rotate-0" } w-5 h-5 transition-all duration-300`}
                            src={`${ isOpen ? "/icons/close.svg": "/icons/open.svg" }`}
                        />
                    </div>
                </div>
            </motion.section>
        </section>
    )

}
const AdvantageItem = ( props ) => {

    const { data } = props

    const [ expand, updateExpand ] = useState( 0 )

    return (
        <section>
            {

                data.map( ( value, index ) => {

                    return (
                        <Accordion expand={ expand } updateExpand={ updateExpand } value={ value } index={ index } key={ "advantage-" + index }/>
                    )

                })

            }
        </section>
    )

}

export default AdvantageItem
