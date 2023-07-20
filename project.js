function sendRequest() {
	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/{id}.json';

	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}