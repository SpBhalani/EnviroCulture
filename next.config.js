/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        CLIENTID: process.env.CLIENTID,
        CLIENTSECRET: process.env.CLIENTSECRET,
        REFRESHTOKEN: process.env.REFRESHTOKEN,
        ACCESSTOKEN: process.env.ACCESSTOKEN
    }
}

module.exports = nextConfig
