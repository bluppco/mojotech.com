// IMPORT JSX LAYOUTS
import ContainerJSX from "../../../layouts/Container"

// IMPORT JSX ATOMS
import H2JSX from "../../../atoms/headings/two/jsx"

// IMPORT JSX COMPONENT
import AdvantageItem from "./AdvantageItem"

const Advantage = ( props ) => {

	const { data, advantage } = props

	return(
		<ContainerJSX>
			<section className="space-y-20 py-20">
				<H2JSX>{ advantage.title }</H2JSX>
				<div class="grid md:grid-cols-2 gap-x-8 gap-8 md:gap-y-16">
					{

						data.map( ( value ) => {

							return(
								<AdvantageItem
									title={ value.title }
									description={ value.description }
								/>
							)

						})

					}
				</div>
			</section>
		</ContainerJSX>
	)

}

export default Advantage
