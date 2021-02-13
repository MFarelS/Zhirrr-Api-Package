const fetch = require('node-fetch');
const copid = 'https://covid19-api-zhirrr.vercel.app'
const anjay = 'https://kbbi-api-zhirrr.vercel.app'
const palpale = 'https://gempa-api-zhirrr.vercel.app'

module.exports.covidworld = function covidworld(query) {
	return new Promise((resolve, reject) => {
		fetch(copid+'/api/world/idwiki?query=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.covidindo = function covidindo(query) {
	return new Promise((resolve, reject) => {
		fetch(covidindo+'/api/covid-indonesia' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.kbbi = function kbbi(query) {
	return new Promise((resolve, reject) => {
		fetch(anjay+'/api/kbbi?text=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.infogempa = function infogempa(query) {
	return new Promise((resolve, reject) => {
		fetch(anjay+'/api/gempa' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}
