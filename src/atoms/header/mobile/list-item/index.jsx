// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index.jsx"

const ListItem = ( props ) => {

    // GET PROPS
    const { href } = props

    return(
        <li className="font-gt_america_regular text-xl">
            <Link href={ href } aria_label={ props.children }>
                { props.children }
            </Link>
        </li>
    )

}

export default ListItem
