document.getElementById('bgColorPicker').addEventListener('change', e => {
  canvas.setBackgroundColor(e.target.value, canvas.renderAll.bind(canvas));
});
document.getElementById('bgImageInput').addEventListener('change', e => {
  const reader = new FileReader();
  reader.onload = () => {
    fabric.Image.fromURL(reader.result, img => { img.set({ selectable:false, left:0, top:0, scaleX:canvas.width/img.width, scaleY:canvas.height/img.height }); canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas)); });
  };
  reader.readAsDataURL(e.target.files[0]);
});
document.getElementById('toggleOffer').addEventListener('change', e => {
  // Implementation placeholder for toggling offer elements
});
document.getElementById('fontFamily').addEventListener('change', e => {
  canvas.getActiveObject().set('fontFamily', e.target.value); canvas.renderAll();
});
document.getElementById('canvasSize').addEventListener('change', e => {
  initCanvas(e.target.value);
});