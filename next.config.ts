import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: [
        'http://26.98.205.113:3000',
        'http://192.168.*.*:3000',
        'http://10.*.*.*:3000',
    ],
};

export default nextConfig;
