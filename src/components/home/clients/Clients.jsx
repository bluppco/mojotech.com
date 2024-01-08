import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

// IMPORT JSX ATOMS
import H2JSX from "../../../atoms/jsx/H2"

// IMPORT JSX COMPONENTS
import Testimonials from "./Testimonials"

const Clients = ( props ) => {

	const data = Array(8).fill({

		src: "/credit-karma.svg",
		alt: ""

	})

	const testimonial = Array(6).fill({

		author_name: "Leo Pellerin",
		author_designation: "CIO, United Way of Connecticut",
		src: "",
		alt: "",
		review: "MojoTech is everything I could ask for in a product development partner. They quickly became trusted members of our product and engineering teams, and we relied on them to independently drive critical initiatives ranging from new feature development to enterprise integrations and legacy modernization."

	})

	return(
		<section className="space-y-10 py-20">
			<H2JSX>A Trusted Software Development Partner</H2JSX>
			<p className="text-2xl font-gt_america_light">
				MojoTech partners with progressive organizations to deliver solutions requiring speed, scale, security, and innovation.
			</p>
			<Carousel showThumbs={ false } showStatus={ false } showArrows={ false } autoPlay={ true } infiniteLoop={ true } showIndicators={ true }>
				{

					testimonial.map( ( item, index ) => {

						return(
							<div key={ "testimonial-" + index }>
								<Testimonials
									author_name={ item.author_name }
									author_designation={ item.author_designation }
									src={ item.src }
									alt={ item.alt }
									review={ item.review }
								/>
							</div>
						)

					})

				}
			</Carousel>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10">
				{

					data.map( ( item, index ) => {

						return(
							<div className="w-40 aspect-video" key={ "clients-logo-" + index }>
								<img
									src={ item.src }
									alt={ item.alt }
									className="w-full h-full"
								/>
							</div>
						)

					})

				}
			</div>
		</section>
	)

}

export default Clients
