'use strict';


var showMap = document.querySelector('.map');

var pinTemplate = document.querySelector('#pin')
  .content
  .querySelector('.map__pin');

var MAP_WIDTH = showMap.clientWidth;

var MAP_HEIGTH_MAX = 501;

var MAP_HEIGTH_MIN = 130;

var types = ['palace', 'flat', 'house', 'bungalo'];

var mapClick = document.querySelector('.map__pin--main');

var adForm = document.querySelector('.ad-form');

var inputsSelects = adForm.querySelectorAll('input, select');

var addingAttributes = function (selector, attribute, value) {
  var elements = document.querySelectorAll(selector);
  for (var i = 0; i < inputsSelects.length; i++) {
    elements[i].setAttribute(attribute, attribute);
  }
};

var removeAttributes = function (selector, attribute) {
  var elements = document.querySelectorAll(selector);
  for (var i = 0; i < inputsSelects.length; i++) {
    elements[i].removeAttribute(attribute);
  }
};

addingAttributes('input, select', 'disabled');

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

function getRandomElement(array) {
  return array[getRandom(array.length - 1)];
}

var avatars = [];

for (var i = 1; i < 9; i++) {
  var pic = 'img/avatars/user0' + i + '.png';
  avatars.push(pic);
}

var pins = [];

for (i = 0; i < 8; i++) {
  pins[i] = {
    author: {
      avatar: avatars[i]
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
};

var fragment = document.createDocumentFragment();
for (i = 0; i < 8; i++) {
  fragment.appendChild(renderPin(pins[i]));
}


// выполнение задания 4.1

mapClick.addEventListener('click', function (evt) {
  adForm.classList.remove('ad-form--disabled');
  showMap.classList.remove('map--faded');
  showMap.appendChild(fragment);
  removeAttributes('input, select', 'disabled');
  inputsSelects[i].removeAttribute('disabled');
  var xMapPin = evt.clientX;
  var yMapPin = evt.clientY;
  var mapPositionInput = document.querySelector('form[name="address"] input');
  mapPositionInput.setAttribute('value', xMapPin, yMapPin);
  console.log(xMapPin);
  console.log(yMapPin);
});
