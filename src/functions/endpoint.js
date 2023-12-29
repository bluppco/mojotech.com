export const endpointFetch = ( environment ) => {

    return environment === "staging" ? "https://staging.api.mojotech.blupp.co" : "https://api.mojotech.blupp.co"

}
