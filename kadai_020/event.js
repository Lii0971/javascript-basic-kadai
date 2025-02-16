
// btnというidを持つHTML要素を取得し、定数に代入する
const btn01 = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に代入する
const text01 = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn01.addEventListener('click', () => {
    text01.textContent = 'ボタンをクリックしました';
});