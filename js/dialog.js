'use strict';

(function () {
  const setup = document.querySelector(`.setup`);
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = setup.querySelector(`.setup-close`);
  const setupStandartPositionTop = `${80}px`;
  const setupStandartPositionLeft = `${50}%`;

  setup.querySelector(`.setup-similar`).classList.remove(`hidden`);

  const onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  setupOpen.addEventListener(`click`, function () {
    openPopup();
  });

  setupOpen.addEventListener(`keydown`, function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener(`click`, function () {
    closePopup();
  });

  setupClose.addEventListener(`keydown`, function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  const openPopup = function () {
    setup.classList.remove(`hidden`);
    document.addEventListener(`keydown`, onPopupEscPress);
    setup.style.top = setupStandartPositionTop;
    setup.style.left = setupStandartPositionLeft;
  };

  const closePopup = function () {
    setup.classList.add(`hidden`);
    document.removeEventListener(`keydown`, onPopupEscPress);
  };
})();
