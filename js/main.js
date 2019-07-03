'use strict';


var showMap = document.querySelector('.map');
showMap.classList.remove('map--faded');

var pinTemplate = document.querySelector('#pin')
  .content
  .querySelector('.map__pin');

var MAP_WIDTH = showMap.clientWidth;

var MAP_HEIGTH_MAX = 501;

var MAP_HEIGTH_MIN = 130;

var types = ['palace', 'flat', 'house', 'bungalo'];

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

function getRandomElement(array) {
  return array[getRandom(array.length - 1)];
}

var avatars = [];

for (var i = 1; i < 9; i++) {
  var pic = 'img/avatars/user0' + i + '.png'
  avatars.push(pic);
}


var pins = [];

var pins = [
  {
  author: {
    avatar: getRandomElement(avatars)
  },
  offer: {
    type: getRandomElement(types)
  },
  location: {
    x: Math.floor(Math.random() * MAP_WIDTH),
    y: Math.floor(Math.random() * MAP_HEIGTH_MAX) + MAP_HEIGTH_MIN
  }
}
];

for (var i = 0; i < 9; i++) {
    pins[i] = {
      author: {
        avatar: getRandomElement(avatars)
      },
      offer: {
        type: getRandomElement(types)
      },
      location: {
        x: Math.floor(Math.random() * MAP_WIDTH),
        y: Math.floor(Math.random() * MAP_HEIGTH_MAX) + MAP_HEIGTH_MIN
      }
    };
  }



var renderPin = function (pin) {
  var pinElement = pinTemplate.cloneNode(true);
  pinElement.querySelector('img').setAttribute('src', pin.author.avatar);
  pinElement.style.left = pin.location.x + 'px';
  pinElement.style.top = pin.location.y + 'px';
  pinElement.querySelector('img').setAttribute('alt', pin.offer.type);
  return pinElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < 9; i++) {
  fragment.appendChild(renderPin(pins[i]));
}
showMap.appendChild(fragment);


/*
<template id="pin">
    <button type="button" class="map__pin" style="left: 200px; top: 400px;"><img src="img/avatars/user07.png" width="40" height="40" draggable="false" alt="Метка объявления"></button>
  </template>
*/
