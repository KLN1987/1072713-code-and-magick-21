'use strict';
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const GAP_COLUMNS = 50;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;
const BAR_INDENT = BAR_WIDTH + GAP_COLUMNS;
const statisticCoordinateX = CLOUD_X + GAP * 3;
const statisticCoordinateY = CLOUD_HEIGHT - GAP * 2;
const statisticTextCoordinateY = statisticCoordinateY - GAP * 3;
const colorEnemy = `hsl(240,` + Math.floor(Math.random() * 100) + `%, 50%)`;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

  const maxTime = Math.floor(Math.max(...times)); // находит максимальный элемент массива

  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + GAP, CLOUD_Y + GAP * 2);
  ctx.fillText(`Список результатов:`, CLOUD_X + GAP, CLOUD_Y + GAP * 4);


  for (let i = 0; i < players.length; i++) {
    ctx.fillStyle = `#000`;
    ctx.fillStyle = `#000`;
    ctx.fillText(players[i], statisticCoordinateX + BAR_INDENT * i, statisticCoordinateY);
    ctx.fillText(Math.floor(times[i]), statisticCoordinateX + BAR_INDENT * i, statisticTextCoordinateY - (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = players[i] === `Вы` ? `rgba(255, 0, 0, 1)` : colorEnemy;
    ctx.fillRect(statisticCoordinateX + BAR_INDENT * i, statisticCoordinateY - GAP - ((BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};
