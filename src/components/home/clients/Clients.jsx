import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

// IMPORT JSX ATOMS
import H2JSX from "../../../atoms/jsx/H2"

// IMPORT JSX COMPONENTS
import Testimonials from "./Testimonials"

// IMPORT CONSTANTS
import { CDN_LINK, IMAGE_QUALITY } from "../../../constants/cdn"

const Clients = ( props ) => {

	const { clients, data } = props

	return(
		<section className="space-y-10 py-20">
			<H2JSX>{ clients.title }</H2JSX>
			<p className="text-2xl font-gt_america_light">{ clients.description }</p>
			<Carousel showThumbs={ false } showStatus={ false } showArrows={ false } autoPlay={ true } infiniteLoop={ true } showIndicators={ true }>
				{

					data.map( ( item, index ) => {

						return(
							<div key={ "testimonial-" + index }>
								<Testimonials
									author_name={ item.name }
									author_designation={ item.designation }
									src={ item.cover }
									alt={ item.alt }
									review={ item.description }
								/>
							</div>
						)

					})

				}
			</Carousel>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10">
				{

					clients.images.map( ( item, index ) => {

						return(
							<div className="w-40 aspect-video" key={ "clients-logo-" + index }>
								<img
									src={ CDN_LINK + item.file + "?quality=" + IMAGE_QUALITY }
									alt=""
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
