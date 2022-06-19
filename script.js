const GameViewPort = {
  WIDTH: 384,
  HEIGHT: 224,
};

window.onload = function () {
  const canvasEl = document.querySelector('canvas');
  const context = canvasEl.getContext('2d');

  canvasEl.width = GameViewPort.WIDTH;
  canvasEl.height = GameViewPort.HEIGHT;

  const ken = document.querySelector('img');

  context.strokeStyle = 'yellow';
  context.moveTo(0, 0);
  context.lineTo(GameViewPort.WIDTH, GameViewPort.HEIGHT);
  context.moveTo(GameViewPort.WIDTH, 0);
  context.lineTo(0, GameViewPort.HEIGHT);
  context.stroke();

  context.drawImage(ken, 0, 0);

  console.log(context);
};
