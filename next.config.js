/** @type {import('next').NextConfig} */
// import { join } from "path"
import path from "path"

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    // includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
}

export default nextConfig
