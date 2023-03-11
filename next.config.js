/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/office",
        headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=1, stale-while-revalidate=59",
          },
        ],
      },
    ];
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