// IMPORTS LAYOUTS
import Container from "@/layouts/container/jsx/index.jsx"

// IMPORTS COMPONENTS
import AdvantageCard from "@/components/home/advantage/card/index.jsx"

// IMPORTS ATOMS
import HeadingTwo from "@/atoms/headings/two/jsx/index.jsx"

const Advantage = ( props ) => {

	// GET PROPS
	const {

		advantage,
		CDN,
		data,
		PROJECT

	} = props

	return(
		<Container>
			<section className="space-y-20 py-20">
				<HeadingTwo>{ advantage.title }</HeadingTwo>
				<div class="grid md:grid-cols-2 gap-x-8 gap-8 md:gap-y-16">
					{

						data.map( ( value, index ) => {

							return(
								<div key={ index }>
									<AdvantageCard
										CDN={ CDN }
										description={ value.description }
										PROJECT={ PROJECT }
										source={ value.cover }
										title={ value.title }
									/>
								</div>
							)

						})

					}
				</div>
			</section>
		</Container>
	)

}

export default Advantage
