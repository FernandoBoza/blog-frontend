
const SriPlugin = require("webpack-subresource-integrity");
const { createSecureHeaders } = require("next-secure-headers");

module.exports = {
    images: {
        domains: [
            "via.placeholder.com",
            "strapi-next-s3.s3.amazonaws.com",
            "https://fb-cms.herokuapp.com",
            "https://fb-client.herokuapp.com",
            "https://www.fernandoboza.com"
        ],
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: createSecureHeaders({
                    contentSecurityPolicy: {
                        directives: {
                            defaultSrc: [
                                "'self'",
                                "via.placeholder.com",
                                "strapi-next-s3.s3.amazonaws.com",
                                "https://fb-cms.herokuapp.com",
                                "https://www.fernandoboza.com"
                            ],
                            styleSrc: ["'self'", "'unsafe-inline'", "https://www.fernandoboza.com"],
                            imgSrc: [
                                "https://www.fernandoboza.com",
                                "'self'",
                                "via.placeholder.com",
                                "strapi-next-s3.s3.amazonaws.com",
                            ],
                            baseUri: "self",
                            formAction: "self",
                            frameAncestors: true,
                        },
                    },
                    frameGuard: "deny",
                    noopen: "noopen",
                    nosniff: "nosniff",
                    xssProtection: "sanitize",
                    forceHTTPSRedirect: [
                        true,
                        { maxAge: 60 * 60 * 24 * 360, includeSubDomains: true },
                    ],
                    referrerPolicy: "same-origin",
                }),
            }
        ];
    },
    // webpack(config) {
    //     config.output.crossOriginLoading = "anonymous";
    //     config.plugins.push(
    //         new SriPlugin({
    //             hashFuncNames: ["sha256", "sha384"],
    //             enabled: true,
    //         })
    //     );
    //
    //     return config;
    // },
};
