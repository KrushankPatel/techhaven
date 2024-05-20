// next.config.js

const { ESLint } = require('eslint')
const ContentSecurityPolicy = require('./csp')
const redirects = require('./redirects')

module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  ESLint: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      process.env.NEXT_PUBLIC_SERVER_URL,
      'i.ibb.co',
      'static.wixstatic.com',
      'rukminim1.flixcart.com',
    ]
      .filter(Boolean)
      .map(url => url.replace(/https?:\/\//, '')),
  },
  redirects,
  async headers() {
    const headers = []

    if (!process.env.NEXT_PUBLIC_IS_LIVE) {
      headers.push({
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
        source: '/:path*',
      })
    }

    // Set the `Content-Security-Policy` header as a security measure to prevent XSS attacks
    // It works by explicitly whitelisting trusted sources of content for your website
    // This will block all inline scripts and styles except for those that are allowed
    headers.push({
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "img-src 'self' https://*.stripe.com https://raw.githubusercontent.com blob:;",
        },
      ],
    })

    return headers
  },
}
