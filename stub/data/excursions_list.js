const excursions_list = {
    "status": 0,
    "errorMessage": "",
    "excursions": [
        {
            'id': 0,
            'region': 'RU',
            'title': 'Экскурсия 1',
            'price': 100.0,
            'start_time': '12:00',
            'duration': 120,
            'services': ["HUMN", "LINE", "BOAT"],
            'type': 'WTCH',
            "images": [
                'https://im0-tub-ru.yandex.net/i?id=e1db90c3be0001e0dfc6e1dce88b67a7&n=13&exp=1',
                'https://arduff.files.wordpress.com/2008/10/norway-013.jpg',
                'https://im0-tub-ru.yandex.net/i?id=37bff7b27c408b19bf0ed29d82874fad&n=33&w=225&h=150',
                'http://travelbelka.ru/wp-content/uploads/2016/09/ARHIZ-OBL-1068x712.jpg'
            ],
            "description": "some description",
            "starting_point": "some starting point",
            "available_dates": [
                1552642200000,
                1552908600000
            ],
            "price_adult": 400.0,
            "price_child": 200.0
        },
        {
            'id': 1,
            'title': 'Экскурсия 2',
            'region': 'RU',
            'price': 400.0,
            'start_time': '10:00',
            'duration': 240,
            'services': ["FORK", "BEDH"],
            'type': 'CULT',
            "images": [
                'https://arduff.files.wordpress.com/2008/10/norway-013.jpg',
                'http://mypresentation.ru/documents/2a6d4215f6af44701aa4d2b3cac0cf97/img38.jpg',
                'https://im0-tub-ru.yandex.net/i?id=37bff7b27c408b19bf0ed29d82874fad&n=33&w=225&h=150',
                'http://travelbelka.ru/wp-content/uploads/2016/09/ARHIZ-OBL-1068x712.jpg'
            ],
            "description": "another description",
            "starting_point": "another starting point",
            "available_dates": [
                1552682200000,
                1552988600000
            ],
            "price_adult": 300.0,
            "price_child": 230.0
        }
    ]
};

module.exports = excursions_list;