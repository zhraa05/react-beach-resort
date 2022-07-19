import { createClient } from "contentful"

export default createClient({
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REAC_APP_ACCESS_TOKEN
})







// Space ID
// o8xassru75a1
// Content Delivery API - access token
// aEXAFMNIl4TyrGzz_H2uJnk0my_TT6T23K7lBckyDzM