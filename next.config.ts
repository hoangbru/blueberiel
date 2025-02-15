import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost"],
  },
};

export default withNextIntl(nextConfig);
