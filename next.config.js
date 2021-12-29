/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  assetPrefix: './',
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/malo-polese/image/upload/v1617964829/Polytech_DO/polyflix-showcase/',
  },
};
