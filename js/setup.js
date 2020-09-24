'use strict';
const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb (215, 210, 55)`, `rgb (0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];

let userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

let similarListElement = document.querySelector(`.setup-similar-list`);
let similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

let getRandomElement = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

let wizards = [];
for (let i = 0; i < 4; i++) {
  let anotheWizards = {
    name: WIZARD_NAMES[getRandomElement(WIZARD_NAMES)] + ` ` + WIZARD_SURNAMES[getRandomElement(WIZARD_SURNAMES)],
    coatColor: COAT_COLOR[getRandomElement(COAT_COLOR)],
    eyesColor: EYES_COLORS[getRandomElement(EYES_COLORS)]
  };
  wizards.push(anotheWizards);
}

let renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

let fragment = document.createDocumentFragment();
wizards.forEach(function (j) {
  fragment.appendChild(renderWizard(j));
});

similarListElement.appendChild(fragment);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
