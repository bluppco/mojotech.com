import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

// IMPORT JSX LAYOUTS
import ContainerJSX from "../../../layouts/container/jsx"

// IMPORT JSX ATOMS
import H2JSX from "../../../atoms/headings/two/jsx"

// IMPORT JSX COMPONENTS
import Testimonials from "./Testimonials"

// IMPORT CONSTANTS
import { CDN_LINK, IMAGE_QUALITY } from "../../../constants/cdn"

const Clients = ( props ) => {

	const { clients, data } = props

	return(
		<ContainerJSX>
			<section className="space-y-4 md:space-y-10 py-10 md:py-20 relative">
				<H2JSX>{ clients.title }</H2JSX>
				<p className="text-xl md:text-2xl font-gt_america_light">{ clients.description }</p>
				<div className="relative h-[520px] w-full">
					{

						data.map( ( item, index ) => {

							return(
								<div key={ "testimonial-" + index } className="hover:opacity-0 transition-all duration-1000 absolute top-0">
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
				</div>
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
		</ContainerJSX>
	)

}

export default Clients
