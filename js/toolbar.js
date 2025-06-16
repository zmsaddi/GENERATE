document.getElementById('addTextBtn').addEventListener('click', () => {
  const textbox = new fabric.Textbox('Texto editable', { left: 50, top: 50, width: 300, fontSize: 24, fill: '#fff', backgroundColor: 'rgba(0,0,0,0.3)', padding: 5 });
  canvas.add(textbox).setActiveObject(textbox);
});
document.getElementById('addImageBtn').addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = 'image/*';
  input.onchange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      fabric.Image.fromURL(reader.result, img => { img.set({ left:100, top:100, scaleX:0.5, scaleY:0.5 }); canvas.add(img).setActiveObject(img); });
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  input.click();
});
const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
  icon.addEventListener('dragstart', e => { e.dataTransfer.setData('text/plain', icon.src); });
});
canvas.on('drop', e => {
  const src = e.e.dataTransfer.getData('text/plain');
  fabric.Image.fromURL(src, img => { img.set({ left: e.pointer.x, top: e.pointer.y, scaleX:0.3, scaleY:0.3 }); canvas.add(img).setActiveObject(img); });
});