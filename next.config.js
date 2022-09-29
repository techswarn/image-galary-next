/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
            domains: ['backendapp.fra1.digitaloceanspaces.com'],
            unoptimized: true
    },
}
    
module.exports = nextConfig