const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Allow Turbopack to resolve hoisted workspace packages
  transpilePackages: ["framer-motion"],
};

module.exports = withMDX(nextConfig);
