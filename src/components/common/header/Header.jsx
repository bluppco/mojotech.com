// IMPORT JSX LAYOUTS
import ContainerJSX from "../../../layouts/Container"

// IMPORT JSX ATOMS
import ButtonJSX from "../../../atoms/jsx/Button"

// IMPORT JSX COMPONENTS
import HeaderItem from "./HeaderItem"
import MobileHeader from "../header/MobileHeader"

const Header = () => {

	return(
		<>
			<header className="hidden md:flex bg-white items-center h-36">
				<ContainerJSX>
					<div className="flex items-center">
						<a href="/" aria-label="logo">
							<div className="size-14 fixed top-20 left-20 z-50">
								<svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 58 50" class="group">
									<g>
										<polygon className="fill-[#00BA40] origin-center hover:rotate-[60deg] duration-300 transition-all" points="14.4933433 -3.05533376e-13 1.42108547e-14 24.9870871 14.4868122 49.9865029 43.4704051 49.9981467 57.9579048 24.9983884 43.4704051 -3.05533376e-13"></polygon>
										<polygon className="fill-[#FFFFFF]" points="37.1657681 14.6505433 41.2769648 14.6505433 41.2769648 35.3489732 34.4233662 35.3489732 34.4223349 26.5141272 35.688006 24.4562704 29.0526858 28.7216401 22.4170218 24.4562704 23.6820054 26.5141272 23.6820054 35.3489732 16.8284068 35.3489732 16.8284068 14.6505433 20.9385723 14.6505433 29.0526858 20.4871307"></polygon>
									</g>
								</svg>
							</div>
						</a>
						<nav className="">
							<ul className="flex gap-6">
								<HeaderItem>Services</HeaderItem>
								<HeaderItem>Process</HeaderItem>
								<HeaderItem>Work</HeaderItem>
								<HeaderItem>About</HeaderItem>
								<HeaderItem>Thoughts</HeaderItem>
							</ul>
						</nav>
						<div className="fixed top-20 right-20 z-50">
							<ButtonJSX>Contact</ButtonJSX>
						</div>
					</div>
				</ContainerJSX>
			</header>
			<MobileHeader />
		</>
	)

}

export default Header
