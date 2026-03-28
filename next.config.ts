import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  //output: 'export', // Outputs a Single-Page Application (SPA)
  images: {
    unoptimized: true, // disables Image Optimization API
  },
  distDir: 'build', // Changes the build output directory to `build`
}
 
export default nextConfig