module.exports = {
    content: [
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1C7ED6',
                    dark: '#1864AB'
                },
                surface: '#F8FAFC',
                muted: '#6B7280',
                highlight: '#22C55E'
            },
            boxShadow: {
                soft: '0 24px 80px rgba(15, 23, 42, 0.08)'
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui']
            }
        },
    },
    plugins: [],
}
