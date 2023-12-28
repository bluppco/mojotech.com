import ButtonJSX from "../../../atoms/jsx/Button"
import ContainerJSX from "../../../layouts/Container"
import HeaderItem from "./HeaderItem"

const Header = () => {

	return(
			<header className="bg-white flex items-center">
				<ContainerJSX>
					<div className="flex items-center">
						<a href="/" aria-label="logo">
							<div className="size-14 fixed top-16 left-20">
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
						<div className="fixed top-16 right-20">
							<ButtonJSX>Contact</ButtonJSX>
						</div>
					</div>
				</ContainerJSX>
			</header>
	)

}

export default Header
