
const SriPlugin = require("webpack-subresource-integrity");
const { createSecureHeaders } = require("next-secure-headers");

module.exports = {
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
                                "https://fb-cms.herokuapp.com"
                            ],
                            styleSrc: ["'self'", "'unsafe-inline'"],
                            imgSrc: [
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
    images: {
        domains: [
            "via.placeholder.com",
            "strapi-next-s3.s3.amazonaws.com",
            "https://fb-cms.herokuapp.com"
        ],
    },
    webpack(config) {
        config.output.crossOriginLoading = "anonymous";
        config.plugins.push(
            new SriPlugin({
                hashFuncNames: ["sha256", "sha384"],
                enabled: true,
            })
        );

        return config;
    },
};
