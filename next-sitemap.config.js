/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://devfest.pe/',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://gdsc-peru-hack.web.app/server-sitemap.xml', // <==== Add here
        ],
    },
}