const ButtonPrimary = ( props ) => {

    return(
        <div className="w-fit overflow-hidden relative group">
            <button className={`text-black bg-white py-2 px-6 flex justify-center items-center border border-black w-full after:w-0 after:h-full after:bg-black after:text-white after:absolute after:left-0 after:top-0 after:z-30 hover:after:w-full after:transition-[width] after:duration-300`}>
                <div className="z-40 relative group-hover:text-white duration-200 text-lg tracking-wider font-gt_america_regular">
                    { props.children }
                </div>
            </button>
        </div>
    )

}

export default ButtonPrimary
