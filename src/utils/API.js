export default {
	fetchCharacters: () => {
		var raw = null

var requestOptions = {
  method: 'GET',
  body: raw,
  redirect: 'follow'
};

		return fetch("https://rickandmortyapi.com/api/character/", requestOptions).then((response) => response.json());
	}
};