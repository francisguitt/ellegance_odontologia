
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'img.freepik.com',
//                 port: '',
//                 pathname: '/**',
//             },
//             {
//                 protocol: 'https',
//                 hostname: 'freepik.com',
//                 port: '',
//                 pathname: '/**',
//             },
//             {
//                 protocol: 'https',
//                 hostname: 'encrypted-tbn0.gstatic.com', // Adiciona suporte para imagens do Google
//                 port: '',
//                 pathname: '/**',
//             }
//         ],
//     },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "img.freepik.com",
            "freepik.com",
            "encrypted-tbn0.gstatic.com",
            "images.unsplash.com",
            "media.istockphoto.com" // Agora permite imagens do iStock
        ],
    },
};

export default nextConfig;
