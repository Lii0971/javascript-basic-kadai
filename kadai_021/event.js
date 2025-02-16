const btn = document.getElementById('bin');
const text = document.getElementById('text');

btn.addEventListener('clik', () => {
  text.innerText = 'ボタンをクリックしました';
});