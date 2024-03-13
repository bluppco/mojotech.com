export const homeAPI = async ( ENVIRONMENT, ENDPOINT ) => {

    // NETWORK CALL TO GET DATA
    const network_data = await fetch( ENDPOINT + "/home" )
    const data_json = await network_data.json()

    const { home, services, work, advantages, testimonials, meta_tags } = data_json.data

    let home_data = {

        // HOME PROPS
        hero : "",
        carousel : "",
        service : "",
        more_services : "",
        our_work : "",
        work_carousel_one : "",
        work_carousel_two : "",
        work_carousel_three : "",
        advantage : "",
        our_process : "",
        trusted_partner : "",
        clients : "",

    }
    home.map( ( data ) => {

        if( data.slug === "hero" )
            home_data.hero = data
        else if( data.slug === "carousel" )
            home_data.carousel = data
        else if ( data.slug === "services" )
            home_data.service = data
        else if ( data.slug === "more-services" )
            home_data.more_services = data
        else if ( data.slug === "work" )
            home_data.our_work = data
        else if ( data.slug === "work-carousel-one" )
            home_data.work_carousel_one = data
        else if( data.slug === "work-carousel-two" )
            home_data.work_carousel_two = data
        else if ( data.slug === "work-carousel-three" )
            home_data.work_carousel_three = data
        else if ( data.slug === "advantage" )
            home_data.advantage = data
        else if ( data.slug === "our-process" )
            home_data.our_process = data
        else if ( data.slug === "trusted-partner" )
            home_data.trusted_partner = data
        else if ( data.slug === "clients" )
            home_data.clients = data

    })

    return { home_data, services, work, advantages, testimonials, meta_tags }

}
