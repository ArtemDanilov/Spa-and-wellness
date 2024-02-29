/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                '2xl': '5.5rem',
            },
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1440px',
        },

    extend: {
        fontFamily: {
            'primary': ['Raleway', 'sans-serif'],
            'secondary': ['Harmony', 'serif'],
        },
        colors: {
            'black': '#091326',
            'brown': '#5D5349',
            'gray': '#C2C7D1',
            
            'beige-50': '#F8F7F4',
            'beige-100': '#EEE7E1',
            'beige-200': '#E8DBCD',
        },
        fontSize: {
            '5.5xl': ['3.125rem', '1.2'], // 50px
            '7.5xl': ['5.625rem', '1.2']  // 90px
        },
        margin: {
            '7.5': '1.875rem',  // 30px
        },
        padding: {
            '22.5': '5.625rem',  // 90px
        },
        keyframes: {
            fadeIn: {
                "0%": { opacity: "0" },
                "100%": { opacity: "1" },
            },
            fadeOut: {
                "0%": { opacity: "1" },
                "100%": { opacity: "0" },
            }
        },
        animation: {
            fadeIn: "fadeIn 500ms forwards",
            fadeOut: "fadeOut 500ms forwards",
        }
    },
},

    plugins: [
        require('@tailwindcss/typography'),
    ],
}
