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
			<header className="hidden md:flex bg-white items-center py-10">
				<ContainerJSX>
					<div className="flex items-center">
						<a href="/" aria-label="logo">
							<div className="size-14 fixed top-16 left-20 z-50">
								<img
									src="/logo/logo.svg"
									alt="mojotech logo"
									className="size-14"
								/>
							</div>
						</a>
						<nav className="">
							<ul className="flex gap-4">
								<HeaderItem>Services</HeaderItem>
								<HeaderItem>Process</HeaderItem>
								<HeaderItem>Work</HeaderItem>
								<HeaderItem>About</HeaderItem>
								<HeaderItem>Thoughts</HeaderItem>
							</ul>
						</nav>
						<div className="fixed top-16 right-20 z-50">
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
