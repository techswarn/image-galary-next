/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // Defaults to 50MB
        isrMemoryCacheSize: 0,
    },

// //     images: {
// //             domains: ['backendapp.fra1.digitaloceanspaces.com', 'localhost'],
// //             loader: 'akamai',
// //             path: '',        
// // //            unoptimized: true
//     },
//     compress: true,

//    trailingSlash: true,  //Use this only if you deploy Nextjs as a static site. 
}

module.exports = nextConfig