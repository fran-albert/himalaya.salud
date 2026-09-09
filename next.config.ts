import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/hci/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/admin/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/portal/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/soporte",
        destination: "/contacto",
        permanent: true,
      },
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
