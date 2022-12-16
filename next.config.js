/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
            domains: ['backendapp.fra1.digitaloceanspaces.com'],
//            unoptimized: true
    },
    compress: true
}
    
module.exports = nextConfig