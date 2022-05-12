async function get3Pokemon() {
	const prom1 =  axios.get("https://pokeapi.co/api/v2/pokemon/1");
	const prom2 =  axios.get("https://pokeapi.co/api/v2/pokemon/2");
	const prom3 =  axios.get("https://pokeapi.co/api/v2/pokemon/3");

	console.log(prom1);

	const poke1 = await prom1;
	const poke2 = await prom2;
	const poke3 = await prom3;


	console.log(poke1.data);
	console.log(poke2.data);
	console.log(poke3.data);
}

get3Pokemon();

function changeBodyColor(color, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.body.style.backgroundColor = color;
			resolve();
		}, delay);
	});
};

changeBodyColor('teal', 1000);
