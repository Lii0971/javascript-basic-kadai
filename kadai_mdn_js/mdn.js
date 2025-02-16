const today = new Date(); //現在（実行した日）
const month = today.getMonth()+1; //月は1プラスする
const date = today.getDate();
const year = today.getFullYear();

console.log(year + "年" + month + "月" + date + "日");

//console.log(today.getFullYear() + "年" + (today.getMonth()+1) + "月" + today.getDate() + "日" );