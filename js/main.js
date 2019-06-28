'use strict';


var showMap = document.querySelector('.map');
showMap.classList.remove('map--faded');

var similarElement = showMap.querySelector('.map');

var pinTemplate = document.querySelector('#pin')
  .content
  .querySelector('.map__pin');



var avatars = [];

var types = ['palace', 'flat', 'house', 'bungalo'];

var x = Math.floor(Math.random() * 1201);

var y = Math.floor(Math.random() * 501) + 130;

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

function getRandomElement(array) {
  return array[getRandom(array.length - 1)];
}

for (var i = 1; i < 9; i++) {
  var pic = 'img/avatars/user0' + i + '.png'
  avatars.push(pic);
}

var pins = [
  {
    type: getRandomElement(types),
    avatar: getRandomElement(avatars),
    x: Math.floor(Math.random() * 1201),
    y: Math.floor(Math.random() * 501) + 130
  },
  {
    type: getRandomElement(types),
    avatar: getRandomElement(avatars),
    x: Math.floor(Math.random() * 1201),
    y: Math.floor(Math.random() * 501) + 130
  },
  {
    type: getRandomElement(types),
    avatar: getRandomElement(avatars),
    x: Math.floor(Math.random() * 1201),
    y: Math.floor(Math.random() * 501) + 130
  },
  {
    type: getRandomElement(types),
    avatar: getRandomElement(avatars),
    x: Math.floor(Math.random() * 1201),
    y: Math.floor(Math.random() * 501) + 130
  },
  {
    type: getRandomElement(types),
    avatar: getRandomElement(avatars),
    x: Math.floor(Math.random() * 1201),
    y: Math.floor(Math.random() * 501) + 130
  },
  {
    type: getRandomElement(types),
    avatar: getRandomElement(avatars),
    x: Math.floor(Math.random() * 1201),
    y: Math.floor(Math.random() * 501) + 130
  },
  {
    type: getRandomElement(types),
    avatar: getRandomElement(avatars),
    x: Math.floor(Math.random() * 1201),
    y: Math.floor(Math.random() * 501) + 130
  },
];

var renderPin = function (pin) {
  var pinElement = pinTemplate.cloneNode(true);

  pinElement.querySelector('img').src = pin.avatar;
  pinElement.querySelector('map__pin').style.position = pin.x;
  pinElement.querySelector('map__pin').style.position = pin.y;
  pinElement.querySelector('map__pin').alt = pin.type;
  return pinElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < pins.length; i++) {
  fragment.appendChild(renderPin(pins[i]));
}
similarElement.appendChild(fragment);


/*
<template id="pin">
    <button type="button" class="map__pin" style="left: 200px; top: 400px;"><img src="img/avatars/user07.png" width="40" height="40" draggable="false" alt="Метка объявления"></button>
  </template>
*/
