const HeaderItem = ( props ) => {

    const { href } = props

    return(
        <li className="group text-mojo_black text-xl cursor-pointer font-gt_america_regular">
            <a href={ href }>{ props.children }</a>
            <div className="w-0 bg-black group-hover:w-full h-[1px] transition-width duration-200 ease-in"></div>
        </li>
    )

}

export default HeaderItem
