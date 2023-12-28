const ContainerJSX = ( props ) => {

    return(
        <section className="container mx-auto px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-md mac:max-w-screen-lg 2xl:max-w-screen-2xl py-4 md:py-20 flex flex-col gap-8 md:gap-20">
            { props.children }
        </section>

    )

}

export default ContainerJSX
