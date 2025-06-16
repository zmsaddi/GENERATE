const canvas = new fabric.Canvas('posterCanvas', { preserveObjectStacking: true });
function initCanvas(size) {
  const [w, h] = size.split('x').map(Number);
  canvas.setWidth(w).setHeight(h);
  canvas.backgroundColor = '#001c40';
  canvas.renderAll();
}
initCanvas('1080x1350');