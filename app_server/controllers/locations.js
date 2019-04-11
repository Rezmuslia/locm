module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'МечетьБлизко - найди ближайшую мечеть',
        pageHeader: {
            title: 'МечетьБлизко',
            strapline: 'Найди мечеть поблизости!'
        },
        sidebar: "МечетьБлизко найдет для вас ближаюшую мечеть.Ищете ближайшую мечеть? Мечеть близко поможет вам найти самую близкую к вам мечеть.",
        locations: [{
            name: 'Мечеть Тысячелетия Ислама',
            address: 'ул.Хади Такташа, 26',
            rating: 3,
            facilities: ['Мэдресе', 'Парковка', 'Чтение пятничного намаза'],
            distance: '100м'
        }, {
            name: 'Аль-Марджани',
            address: 'ул.Каюма Насыри, 17',
            rating: 4,
            facilities: ['Мэдресе', 'Халяль кафе', 'Чтение пятничного намаза'],
            distance: '200м'
        }, {
            name: 'Апанаевская мечеть',
            address: 'ул.Каюма Насыри, 29',
            rating: 2,
            facilities: ['Халяль кафе', 'Парковка'],
            distance: '250m'

        }]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'МечетьБлизко',
        pageHeader: {
            title: 'Мечеть Тысячелетия Ислама'
        },
        sidebar: {
            context: 'или Закабанная мечеть - это первая мечеть, построенная на правом берегу озера Кабана после захвата Казанкого Ханства Иваном Грозным.',
            callToAction: 'Вы можете оставить здесь свой отзыв.'
        },
        location: {
            name: 'Мечеть Тысячелетия Ислама',
            address: 'ул.Хади Такташа, 26',
            rating: 3,
            facilities: ['Мэдресе', 'Халяль кафе', 'Чтение пятничного намаза'],
            coords: {
                lat: 55.7775292,
                lng: -49.1281474
            },
            openingTimes: [{
                days: 'каждый день',
                opening: '4  ',
            }, {
                days: 'каждый день',
                opening: 'круглосуточно',
            }, {
                days: 'каждый день',
                opening: 'круглосуточно',
            }],
            reviews: [{
                author: 'Резеда Хабибуллина',
                rating: 5,
                timestamp: '1 марта 2019',
                reviewText: 'Очень хорошие проповеди по пятницам.'
            }, {
                author: 'Раил Фасхиев',
                rating: 3,
                timestamp: '3 апреля 2019',
                reviewText: 'Спокойная атмосфера в мечети. Люблю сюда приходить.'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Отзыв Мечеть Тысячелетия Ислама на МечетьБлизко',
        pageHeader: {
            title: 'Отзыв Мечеть Тысячелетия Ислама'
        }
    });
};



module.exports.addReview = function (req, res) {
res.render('location-review-form', {
    title: 'Отзыв Мечеть Тысячелетия Ислама на МечетьБлизко',
    pageHeader: {
        title: 'Отзыв Мечеть Тысячелетия Ислама'
    }
});
};