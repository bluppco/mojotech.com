// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index.jsx"
import ListItem from "@/atoms/header/mobile/list-item"
import PictureInternal from "@/atoms/picture/internal/jsx/index.jsx"

// IMPORTS FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion"

// IMPORTS REACT
import { useState } from "react"

const Header = ( props ) => {

    // GET PROPS
    const { header_data } = props

    const [ isOpen, updateOpen ] = useState( false )
    return (
        <header className="md:hidden bg-white px-6 py-6 z-20 w-full">
            <div className="flex justify-between items-center z-20">
                <Link href="/" aria_label="mojotech logo">
                    <div className="size-14 object-cover">
                        <PictureInternal
                            alternative_text="mojotech logo"
                            source="/logo/logo.svg"
                        />
                    </div>
                </Link>
                <div onClick={ () => updateOpen( !isOpen ) }>
                    {

                        isOpen &&
                        <div className="size-6">
                            <img
                                alternative_text="cross icon"
                                source="/icons/cross.svg"
                            />
                        </div>

                    }
                    {

                        !isOpen &&
                        <div className="size-6">
                            <img
                                alternative_text="menu icon"
                                source="/icons/menu.svg"
                            />
                        </div>

                    }
                </div>
            </div>
            <AnimatePresence initial={ false }>
                {

                    <motion.div
                        animate={ isOpen ? "open" : "collapsed" }
                        className="grow"
                        exit="collapsed"
                        initial="collapsed"
                        key="content"
                        transition={{ duration: 0.3 }}
                        variants={{
                            open: { opacity: 1, height: "100vh" },
                            collapsed: { opacity: 0, height: "0px" }
                        }}
                    >
                        <div className="flex flex-col gap-1 items-center justify-center h-full z-10">
                            <ul className="flex flex-col gap-8 text-xl text-center">
                                {

                                    header_data.map( ( value ) => {

                                        return(
                                            <ListItem href={ value.data.slug }>{ value.data.title }</ListItem>
                                        )

                                    })

                                }
                            </ul>
                        </div>
                    </motion.div>

                }
            </AnimatePresence>
        </header>
    )

}

export default Header
