import Splide from '@splidejs/splide';

import '@splidejs/splide/css';

const gallery = new Splide('.gallery', {
    type: 'loop',
    arrows: false,
    pagination: false,
    perPage: 3,
    padding: '4rem',
    focus: 'center',
    breakpoints: {
		480: {
            perPage: 1,
		},
        768: {
            perPage: 2,
        },
    },
    gap: '1rem',
});

export default gallery;