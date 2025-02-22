
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
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
                pathname: '/**',  // Aceita qualquer caminho e parâmetros adicionais
            },
            {
                protocol: 'https',
                hostname: 'freepik.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
                pathname: '/**',
            }
        ],
    },
};

export default nextConfig;
