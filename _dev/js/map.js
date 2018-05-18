ymaps.ready(init);

    function init(){     
        var myMap = new ymaps.Map("map", {
            center: [44.603204, 33.522929],
            zoom: 17,
            controls: ['zoomControl']
        });

        myMap.behaviors.disable('scrollZoom');

        var coords = [
            [44.603204, 33.522929, 'БМ 48'],
            [44.602409, 33.525218, 'Ленина 74']
        ];

        var myGeoObjects =[];
        coords.forEach(function(val, ind, arr){
            myGeoObjects[ind] = new ymaps.Placemark([val[0], val[1]], {
                hintContent: 'Hipsweet на ' + val[2], 
                balloonContent: 'Мы здесь!',
                balloonContentHeader: 'Hipsweet на ' + val[2],
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'assets/pic/icons/mapIcon.png',
                iconImageSize: [42, 59],
                iconImageOffset: [-20, -50]
            });
        });

        var myClusterer = new ymaps.Clusterer();

        myClusterer.add(myGeoObjects);
        myMap.geoObjects.add(myClusterer);
    } 