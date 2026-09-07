/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/Nitesh-Thakur-CV.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: "attachment; filename=\"Nitesh-Thakur-CV.pdf\"",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
