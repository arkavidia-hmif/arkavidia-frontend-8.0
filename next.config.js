module.exports = {
  publicRuntimeConfig: {
    site: {
      name: 'Next.js + Tailwind CSS template',
      url:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://earvinpiamonte-nextjs-tailwindcss-template.vercel.app',
      title: 'Next.js + Tailwind CSS template',
      description: 'Next.js + Tailwind CSS template',
      socialPreview: '/images/preview.png',
    },
  },
  swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/test-timeline-faq': {page: '/test-timeline-faq'}
    }
  },
  images: {
    loader: 'akamai',
    path: '',
  },
};
