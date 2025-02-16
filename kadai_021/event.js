//btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

//textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

//btnをクリックした時のイベント処理を実行する
btn.addEventListener('click', () => {
  setTimeout(() => {
     //textItemの文字を2秒後に置き換える
      text.textContent = 'ボタンをクリックしました';
  }, 2000);
});