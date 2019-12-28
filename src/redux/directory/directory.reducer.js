const INITIAL_STATE = {
    sections : [
        {
            title: 'laptops',
            imageUrl: 'https://s.aolcdn.com/hss/storage/midas/f3d9378e3f93e2d2dc80da3cd07b58bd/206310290/gigabyte-aero-15x-laptop-gaming-lightweight-buyers-guide-2018-04-22-01-ed.jpg',
            id: 1,
            linkUrl: 'shop/laptops'
        },
        {
            title: 'keyboard',
            imageUrl: 'https://www.menkind.co.uk/media/catalog/product/cache/18d539bb2b3719975e9326e6edaea759/7/3/73920---gxt-830-rw-avonn-gaming-keyboard-uk-save-for-web-7.jpg',
            id: 2,
            linkUrl: 'shop/keyboard'
        },
        {
            title: 'mouse',
            imageUrl: 'https://sm.pcmag.com/t/pcmag_in/review/r/razer-basi/razer-basilisk-ultimate_5qvu.640.jpg',
            id: 3,
            linkUrl: 'shop/mouse'
        },
        {
            title: 'graphic',
            imageUrl: 'https://www.reliancedigital.in/wp-content/uploads/2019/02/GeForce_cards.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/graphic'
        },
        {
            title: 'processor',
            imageUrl: 'https://www.extremetech.com/wp-content/uploads/2017/03/AMD-Ryzen-Feature-3-640x353.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/processor'
        }
    ]
}

const directoryReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;