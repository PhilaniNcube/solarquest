/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["sjvyommxrwhabvkjpwpn.supabase.co"],
  },
  experimental: { images: { allowFutureImage: true } },
};
