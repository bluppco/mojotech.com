// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index.jsx"
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

// IMPORTS FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion"

// IMPORTS REACT
import { useState } from "react"

const HeaderMobile = ( props ) => {

    // GET PROPS
    const { header_data } = props

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className="md:hidden top-11 fixed z-50 w-full bg-white py-2 px-4 border-b border-b-gray-100">
            <nav>
                <div className="flex justify-between items-center z-30 relative">
                    <Link href="/" aria_label="mojotech logo">
                        <div className="size-12">
                            <PictureInternalContain
                                alternative_text="mojotech logo"
                                source="/logo/logo.svg"
                            />
                        </div>
                    </Link>
                    <div onClick={ () => updateOpen( !isOpen ) }>
                        {

                            isOpen &&
                            <div className="w-6 aspect-square">
                                <PictureInternalContain
                                    alternative_text="cross icon"
                                    source="/icons/cross.svg"
                                />
                            </div>

                        }
                        {

                            !isOpen &&
                            <div className="w-6 aspect-square">
                                <PictureInternalContain
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
                            key="content"
                            initial="collapsed"
                            animate={ isOpen ? "open" : "collapsed" }
                            exit="collapsed"
                            variants={{
                                open: { opacity: 1, display: "block" },
                                collapsed: { opacity: 0, display: "none" }
                            }}
                            transition={{ duration: 0.3 }}
                            className="grow !h-[calc(100vh-6rem)] bg-white !p-0"
                        >
                            <ul className="flex flex-col gap-8 items-center justify-center h-full z-10">
                                {

                                    header_data.map( ( value, index ) => {

                                        return(
                                            <li className="font-gt_america_regular text-xl" key={ index }>
                                                <Link href={ value.data.slug }>
                                                    { value.data.title }
                                                </Link>
                                            </li>
                                        )

                                    })

                                }
                            </ul>
                        </motion.div>

                    }
                </AnimatePresence>
            </nav>
        </header>
    )

}

export default HeaderMobile
