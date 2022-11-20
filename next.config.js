module.exports = {
  publicRuntimeConfig: {
    site: {
      name: 'Arkavidia 8.0',
      url:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://earvinpiamonte-nextjs-tailwindcss-template.vercel.app',
      title: 'Arkavidia 8.0',
      description: 'Arkavidia merupakan acara IT tahunan yang diadakan oleh Himpunan Mahasiswa Informatika ITB. Dengan tema “Adaptive Collaboration to Encounter Digital Disruption”, Arkavidia 8.0 diharapkan akan lebih banyak individu sadar akan hak dan kewajibannya di dunia digital, sehingga dapat mewujudkan kemerdekaan digital bagi dirinya.',
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
      '/sign-in': {page: '/sign-in'},
      '/sign-up': {page: '/sign-up'},
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
