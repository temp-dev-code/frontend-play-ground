module.exports = {
    content: [
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#00C7B7',
                    dark: '#00A995'
                },
                accent: '#7C5CFF'
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui']
            }
        },
    },
    plugins: [],
}
