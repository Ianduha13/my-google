/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["www.google.com.br"],
	},
}

module.exports = nextConfig
