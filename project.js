let b = document.querySelector('button#print');
b.addEventListener('click', print);

function print() {
	let s = document.querySelector('select#tosi');
	let idx = s.selectedIndex;  // idx 番目の option が選択された

    let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
    let o = os.item(idx);       // os の idx 番目の要素
	let tosimei =o.value;
	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+ tosimei +'.json';
	console.log(url);

	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}
	
	let a1 = document.querySelector('span#a1');
    a1.textContent = data.name;
	let a2 = document.querySelector('span#a2');
    a2.textContent = data.coord.lat;
	let a3 = document.querySelector('span#a3');
    a3.textContent = data.coord.lon;
	let a4 = document.querySelector('span#a4');
    a4.textContent = data.weather[0].description;
	let a5 = document.querySelector('span#a5');
    a5.textContent = data.main.temp_max + '°C';
	let a6 = document.querySelector('span#a6');
    a6.textContent = data.main.temp_min + '°C';
	let a7 = document.querySelector('span#a7');
    a7.textContent = data.main.humidity + '%';
	let a8 = document.querySelector('span#a8');
    a8.textContent = data.wind.speed + 'm/s';
	let a9 = document.querySelector('span#a9');
    a9.textContent = data.wind.deg;
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}

