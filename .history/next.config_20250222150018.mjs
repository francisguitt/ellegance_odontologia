// // /** @type {import('next').NextConfig} */
// // const nextConfig = {};

// // export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'img.freepik.com',
//             // Adicione esse domínio
//                 port: '',
//                 pathname: '/**',
//             },
//             {
//                 protocol: 'https',
//                 hostname: 'freepik.com',
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
                hostname: 'img.freepik.com',  // Domínio do Freepik
                port: '',
                pathname: '/**',  // Aceita qualquer caminho, incluindo parâmetros adicionais
            },
            {
                protocol: 'https',
                hostname: 'freepik.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',  // Domínio do Unsplash
                port: '',
                pathname: '/**',
            }
        ],
    },
};

export default nextConfig;
