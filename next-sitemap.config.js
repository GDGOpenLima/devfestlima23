/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://gdsc-peru-hack.web.app',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap.xml'], // <= exclude here
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://gdsc-peru-hack.web.app/server-sitemap.xml', // <==== Add here
        ],
    },
}