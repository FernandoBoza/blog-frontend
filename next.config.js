const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

// withPWA(

// need to fix PWA

module.exports = {
    // pwa: {
    //     dest: 'public',
    //     runtimeCaching,
    // },
    images: {
        domains: [
            "'self'",
            "https://placeholder.com/",
            "strapi-next-s3.s3.amazonaws.com",
            "https://fb-cms.herokuapp.com",
            "https://fb-client.herokuapp.com",
            "https://www.fernandoboza.com"
        ],
    }
}
