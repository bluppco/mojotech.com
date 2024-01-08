// IMPORT JSX ATOMS
import H2JSX from "../../../atoms/jsx/H2"

// IMPORT JSX COMPONENT
import AdvantageItem from "./AdvantageItem"

const Advantage = ( props ) => {

	const { data, advantage } = props

	return(
		<section className="space-y-20">
			<H2JSX>{ advantage.title }</H2JSX>
			<AdvantageItem data={ data } />
		</section>
	)

}

export default Advantage
