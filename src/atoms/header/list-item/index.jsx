// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index.jsx"

const ListItem = ( props ) => {

    // GET PROPS
    const { href } = props

    return(
        <li className="group text-mojo_black text-xl cursor-pointer font-gt_america_regular">
            <Link href={ href } aria_label={ props.children }>
                { props.children }
            </Link>
            <div className="w-0 bg-black group-hover:w-full h-[1px] transition-width duration-200 ease-in"></div>
        </li>
    )

}

export default ListItem
