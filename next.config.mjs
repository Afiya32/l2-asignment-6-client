/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'c8.alamy.com',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
