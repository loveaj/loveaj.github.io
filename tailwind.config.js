module.exports = {
    content: [
        "./index.html",
        "./_includes/**/*.{html,js}",
        "./_layouts/**/*.{html,js}",
        "./_posts/**/*.{html,md,markdown}",
        "./src/**/*.{html,js}",
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
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
};
