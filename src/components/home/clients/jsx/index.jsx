// IMPORTS LAYOUTS
import Container from "@/layouts/container/jsx/index.jsx"

// IMPORTS COMPONENTS
import Testimonials from "../testimonials/jsx/index.jsx"

// IMPORTS ATOMS
import HeadingTwo from "@/atoms/headings/two/jsx/index.jsx"
import PictureContain from "@/atoms/picture/contain/jsx/index.jsx"

const Clients = ( props ) => {

	// GET PROPS
	const {

		CDN,
		clients,
		data,
		PROJECT

	} = props

	// SORTS THE IMAGES
	const images = clients.images.sort( (a,b) => { return a.order - b.order })

	return(
		<Container>
			<section className="py-10 md:py-20 relative h-full">
				<div className="space-y-4 md:space-y-10">
					<HeadingTwo>{ clients.title }</HeadingTwo>
					<p className="text-xl md:text-2xl font-gt_america_light">{ clients.description }</p>
					<div className="relative h-[560px] md:h-[520px] w-full">
						{

							data.map( ( item, index ) => {

								return(
									<div key={ "testimonial-" + index } className="hover:opacity-0 transition-all duration-1000 absolute top-0">
										<Testimonials
											alternative_text={ item.name }
											author_designation={ item.designation }
											author_name={ item.name }
											CDN={ CDN }
											PROJECT={ PROJECT }
											review={ item.description }
											source={ item.cover }
										/>
									</div>
								)

							})

						}
					</div>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{

						images.map( ( item, index ) => {

							return(
								<div className="w-32 aspect-video" key={ "clients-logo-" + index }>
									<PictureContain
										alternative_text=""
										CDN={ CDN }
										image_width="120"
										PROJECT={ PROJECT }
										source={ item.file }
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

export default Clients
