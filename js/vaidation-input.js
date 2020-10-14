'use strict';
// валидация формы данных персонажа

(function () {
  const MIN_NAME_LENGTH = 2;
  const MAX_NAME_LENGTH = 25;
  const userNameInput = document.querySelector(`.setup-user-name`);
  const validationInput = function (item) {
    const valueLength = item.value.length;

    if (valueLength < MIN_NAME_LENGTH) {
      item.setCustomValidity(`Ещё ` + (MIN_NAME_LENGTH - valueLength) + ` симв.`);
    } if (valueLength > MAX_NAME_LENGTH) {
      item.setCustomValidity(`Удалите лишние ` + (valueLength - MAX_NAME_LENGTH) + ` симв.`);
    } else {
      item.setCustomValidity(``);
    }
    item.reportValidity();
  };

  userNameInput.addEventListener(`input`, validationInput(userNameInput));
})();
