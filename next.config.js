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
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
};
