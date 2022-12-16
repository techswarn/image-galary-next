/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
            domains: ['backendapp.fra1.digitaloceanspaces.com'],
            loader: 'akamai',
            path: '',        
//            unoptimized: true
    },
    compress: true
}
    
module.exports = nextConfig