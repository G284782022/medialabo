// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

let b = document.querySelector('#print');
b.addEventListener('click', hantei);

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="yosou"]');
  let yoso = Number(i.value);
 
  kaisu = kaisu + 1;
  let k = document.querySelector('span#kaisu');
  k.textContent = kaisu;

  let y = document.querySelector('span#yoso');
  y.textContent = yoso;
  
  let p = document.querySelector('p#result');
  if (kaisu > 3){
    p.textContent ='答えは'+kotae+'でした。すでにゲームは終わっています。';
 }else if(kaisu === 3){
    if (kotae===yoso){
        p.textContent ='正解です。おめでとう!';
    }else{
        p.textContent ='まちがい。残念でした答えは'+kotae+'です。';
    }
 }else{
    if (kotae===yoso){
        p.textContent ='正解です。おめでとう!';
    }else if (kotae < yoso){
        p.textContent ='まちがい。答えはもっと小さいですよ。';
    }else{
        p.textContent ='まちがい。答えはもっと大きいですよ。';
    }
 }

  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}
