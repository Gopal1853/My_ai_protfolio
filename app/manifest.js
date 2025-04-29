export default function manifest() {
    return {
        name: 'R Gopalram ',
        short_name: 'Gopalram',
        description: "Gopalram is Web Developer, Data Engineer, Data Analyst, ECE Engineer",
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}