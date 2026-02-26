import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  // Оптимизация производительности
  poweredByHeader: false,
  compress: true,
  // Отключаем неиспользуемые функции для уменьшения размера
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
