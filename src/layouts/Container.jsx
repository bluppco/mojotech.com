const ContainerJSX = ( props ) => {

    return(
        <section className="container mx-auto px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-md mac:max-w-[900px] 2xl:max-w-screen-2xl flex flex-col gap-8 md:gap-20">
            { props.children }
        </section>

    )

}

export default ContainerJSX
