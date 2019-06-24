'use strict';


var map = document.querySelector('.map');
map.classList.remove('map--faded');

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

var x = Math.floor(Math.random() * 1201);

var y = Math.floor(Math.random() * 501) + 130;


