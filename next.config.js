/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        USER: process.env.USER,
        PASSWORD: process.env.PASSWORD,

    }
}

module.exports = nextConfig
