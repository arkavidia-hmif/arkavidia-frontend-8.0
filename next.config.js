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
      '/test-timeline-faq': {page: '/test-timeline-faq'},
      // '/sign-in': {page: '/sign-in'},
      // '/sign-up': {page: '/sign-up'},
      // '/competition/competitive-programing': {page: '/competition/competitive-programing'},
      // '/competition/arkalogica': {page: '/competition/arkalogica'},
      // '/competition/uxvidia': {page: '/competition/uxvidia'},
      // '/competition/datavidia': {page: '/competition/datavidia'},
      // '/profile': {page: '/profile/'},
      // '/profile/change-password': {page: '/profile/change-password'},
      // '/dashboard/information': {page: '/dashboard/information'},
      // '/dashboard/participant-data': {page: '/dashboard/participant-data'},
      // '/dashboard/submission': {page: '/dashboard/submission'},
    }
  },
  images: {
    loader: 'akamai',
    path: '',
  },
};
