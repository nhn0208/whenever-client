/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'utfs.io'
            },
            {
            protocol: 'https',
            hostname: 'theme.hstatic.net'
            },
            {
            protocol: 'https',
            hostname: 'product.hstatic.net'
            }
        ]
    },
    reactStrictMode: false,
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },
};

export default nextConfig;
