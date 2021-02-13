const fetch = require('node-fetch');
const copid = 'https://covid19-api-zhirrr.vercel.app'
const anjay = 'https://kbbi-api-zhirrr.vercel.app'
const palpale = 'https://gempa-api-zhirrr.vercel.app'

module.exports.covidworld = function covidworld() {
	return new Promise((resolve, reject) => {
		fetch(copid+'/api/world')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.covidindo = function covidindo() {
	return new Promise((resolve, reject) => {
		fetch(copid+'/api/covid-indonesia')
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

module.exports.infogempa = function infogempa() {
	return new Promise((resolve, reject) => {
		fetch(anjay+'/api/gempa')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}
