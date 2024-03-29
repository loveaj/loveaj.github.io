module.exports = {
    content: [
        "./_includes/**/*.{html,js}",
        "./_layouts/**/*.{html,js}",
        "./_posts/**/*.{html,js}",
    ],
    theme: {
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        extend: {
            colors: {
                darkpink: '#DA4A91',
            },
            backgroundImage: theme => ({
                'hero-pattern': "url('../img/bg-bubble-chamber-01.png')",
                'profile-pattern': "url('../img/profile-portrait-circle.png')",
            })
        }
    },
    variants: {},
    plugins: [],
}