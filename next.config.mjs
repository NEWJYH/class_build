/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: ()=>"codecamp-deploy-project"
};

export default nextConfig;
