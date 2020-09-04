export default {
    state: {
        ads: [{
                title: 'First ad',
                description: 'Hello I am a description',
                promo: false,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                id: '123'
            },
            {
                title: 'Second ad',
                description: 'Hello I am a description',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                id: '1234'
            },
            {
                title: 'Third ad',
                description: 'Hello I am a description',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                id: '12345'
            },
        ]
    },
    mutations: {
        createAd(state, payload) {
            state.ads.push(payload);
        }
    },
    actions: {
        createAd({commit}, payload) {
            payload.id = 'qwe';
            commit ('createAd', payload);
        },
    },
    getters: {
        ads(state) {
            return state.ads;
        },
        promoAds(state) {
            return state.ads.filter(ad => {
                return ad.promo;
            });
        },
        myAds(state) {
            return state.ads;
        },
        adById(state) {
            return adId => {
                return state.ads.find(ad => ad.id === adId);
            };
        }
    }
};