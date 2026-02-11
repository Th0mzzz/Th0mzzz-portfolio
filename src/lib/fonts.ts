import localFont from 'next/font/local';

export const gliker = localFont({
    src: [
        {
            path: '../assets/fonts/Gliker-Bold.woff',
            weight: '900',
            style: 'bold',
        },
    ],
    variable: '--font-gliker',
    display: 'swap',
});
