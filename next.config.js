/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
            domains: ['backendapp.fra1.digitaloceanspaces.com'],
            loader: 'akamai',
            path: '',        
//            unoptimized: true
    },
    compress: true,

//    trailingSlash: true,  //Use this only if you deploy Nextjs as a static site. 
}

module.exports = nextConfig