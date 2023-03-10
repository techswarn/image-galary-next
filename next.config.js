/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/:all*(svg|jpg|png)',
            locale: false,
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=9999999999, must-revalidate',
              }
            ],
          },
        ]
      },
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