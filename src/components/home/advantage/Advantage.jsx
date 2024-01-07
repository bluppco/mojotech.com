// IMPORT JSX ATOMS
import H2JSX from "../../../atoms/jsx/H2"

// IMPORT JSX COMPONENT
import AdvantageItem from "./AdvantageItem"

const Advantage = () => {

	const data = Array(4).fill({

		src: "/innovation.svg",
		alt: "",
		title: "Innovation",
		description: "Our cloud-native software development process enables us to swiftly adapt to new opportunities while building upon a solid foundation. We break down complex problems and legacy systems to create multiple paths to innovation and modernization."

	})

	return(
		<section className="space-y-20">
			<H2JSX>The MojoTech Advantage</H2JSX>
			<AdvantageItem data={ data } />
		</section>
	)

}

export default Advantage
