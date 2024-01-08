import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const HeaderJSX = () => {

    const [ isOpen, updateOpen ] = useState( false )
    return (
        <header className="md:hidden bg-white px-6 py-6 z-20 w-full">
            <div className="flex justify-between items-center z-20">
                <a href="/">
                    <img
                        src="/logo/logo.svg"
                        alt="logo"
                        className="w-14 object-cover"
                    />
                </a>
                <div onClick={ () => updateOpen( !isOpen ) }>
                    {

                        isOpen &&
                        <img
                            src="/icons/cross.svg"
                            className="w-6 aspect-square"
                        />

                    }
                    {

                        !isOpen &&
                        <img
                            src="/icons/menu.svg"
                            className="w-6 aspect-square"
                        />

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
                            open: { opacity: 1, height: "100vh" },
                            collapsed: { opacity: 0, height: "0px" }
                        }}
                        transition={{ duration: 0.3 }}
                        className="grow"
                    >
                        <div className="flex flex-col gap-1 items-center justify-center h-full z-10">
                            <ul className="flex flex-col gap-8 text-xl text-center">
                                <li className="font-gt_america_regular text-xl">Home</li>
                                <li className="font-gt_america_regular text-xl">Services</li>
                                <li className="font-gt_america_regular text-xl">Process</li>
                                <li className="font-gt_america_regular text-xl">Work</li>
                                <li className="font-gt_america_regular text-xl">About</li>
                                <li className="font-gt_america_regular text-xl">Thoughts</li>
                                <li className="font-gt_america_regular text-xl">We're Hiring!</li>
                            </ul>
                            <div>
                            </div>
                        </div>
                    </motion.div>

                }
            </AnimatePresence>
        </header>
    )

}

export default HeaderJSX
