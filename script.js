window.onload = function () {
  const canvasEl = document.querySelector('canvas');
  const context = canvasEl.getContext('2d');

  canvasEl.width = 384;
  canvasEl.height = 224;

  console.log(context);
};
