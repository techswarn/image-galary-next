/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
            domains: ['backendapp.fra1.digitaloceanspaces.com'],
            loader: 'akamai',
            path: '',        
//            unoptimized: true
    },
    compress: true,

//    trailingSlash: true,
}

module.exports = nextConfig