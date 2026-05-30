import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/terminos",
        destination: "/terminos-y-condiciones",
        permanent: true,
      },
      {
        source: "/privacidad",
        destination: "/politica-de-privacidad",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
