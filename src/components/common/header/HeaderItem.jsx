const HeaderItem = ( props ) => {

    const { href } = props

    return(
        <li class="group text-mojo_black text-lg cursor-pointer">
            <a href={ href }>{ props.children }</a>
            <div class="w-0 bg-black group-hover:w-full h-[1px] transition-width duration-200 ease-in"></div>
        </li>
    )

}

export default HeaderItem
