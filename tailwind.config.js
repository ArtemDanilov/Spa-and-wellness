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
        extend: {
            fontFamily: {
                'primary': ['Raleway', 'sans-serif'],
                'secondary': ['Harmony', 'serif'],
            },
            colors: {
                'white': '#F8F7F4',
                'black': '#091326',
                'brown': '#5D5349',
                'gray': '#C2C7D1',

                'beige-200': '#E8DBCD',
                'beige-100': '#EEE7E1',
            }
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
