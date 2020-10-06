'use strict';
const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb (215, 210, 55)`, `rgb (0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;
const SUM_CHRACTER = 4;
const ESC_KEY = `Escape`;
const ENTER_KEY = `Enter`;
const FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const setup = document.querySelector(`.setup`);
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = setup.querySelector(`.setup-close`);
const setupWizard = document.querySelector(`.setup-wizard`);
const setupColorCoat = setupWizard.querySelector(`.wizard-coat`);
const setupColorEyes = setupWizard.querySelector(`.wizard-eyes`);
const setupFireballWrap = document.querySelector(`.setup-fireball-wrap`);
const setupColorCoatInput = document.querySelector(`input[name="coat-color"]`);
const setupColorEyesInput = document.querySelector(`input[name="eyes-color"]`);
const setupFireballWrapInput = document.querySelector(`input[name="fireball-color"]`);
const userNameInput = document.querySelector(`.setup-user-name`);

const userDialog = document.querySelector(`.setup`);
// userDialog.classList.remove(`hidden`);

const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const getRandomElement = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

const wizards = [];
for (let i = 0; i < SUM_CHRACTER; i++) {
  const anotheWizards = {
    name: WIZARD_NAMES[getRandomElement(WIZARD_NAMES)] + ` ` + WIZARD_SURNAMES[getRandomElement(WIZARD_SURNAMES)],
    coatColor: COAT_COLOR[getRandomElement(COAT_COLOR)],
    eyesColor: EYES_COLORS[getRandomElement(EYES_COLORS)]
  };
  wizards.push(anotheWizards);
}

const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const fragment = document.createDocumentFragment();
wizards.forEach(function (j) {
  fragment.appendChild(renderWizard(j));
});

similarListElement.appendChild(fragment);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);

const onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

const openPopup = function () {
  setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  setup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onPopupEscPress);
};

// валидация формы данных персонажа
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

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

setupColorCoat.addEventListener(`click`, function () {
  const randomColorCoat = COAT_COLOR[getRandomElement(COAT_COLOR)];
  setupColorCoat.style.fill = randomColorCoat;
  setupColorCoatInput.value = randomColorCoat;
});

setupColorEyes.addEventListener(`click`, function () {
  const randomColorEyes = EYES_COLORS[getRandomElement(EYES_COLORS)];
  setupColorEyes.style.fill = randomColorEyes;
  setupColorEyesInput.value = randomColorEyes;
});

setupFireballWrap.addEventListener(`click`, function () {
  const randomFireballColor = FIREBALL_COLOR[getRandomElement(FIREBALL_COLOR)];
  setupFireballWrap.style.backgroundColor = randomFireballColor;
  setupFireballWrapInput.value = randomFireballColor;
});

userNameInput.addEventListener(`input`, validationInput(userNameInput));
