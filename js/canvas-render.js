document.getElementById('exportBtn').addEventListener('click', () => {
  const dataURL = canvas.toDataURL({ format: 'png', quality: 1 });
  const link = document.createElement('a');
  link.href = dataURL; link.download = 'poster.png'; link.click();
});