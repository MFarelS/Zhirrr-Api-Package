const fetch = require('node-fetch')
const asmaul = 'https://raw.githubusercontent.com/Zhirrr/islamic-rest-api-indonesian/main/data/dataAsmaulHusna.json'
const tahlilan = 'https://raw.githubusercontent.com/Zhirrr/islamic-rest-api-indonesian/main/data/dataTahlil.json'
const kursi = 'https://raw.githubusercontent.com/Zhirrr/islamic-rest-api-indonesian/main/data/dataAyatKursi.json'
const nabi = 'https://kisahnabi-api-zhirrr.vercel.app'
const wiridd = 'https://raw.githubusercontent.com/Zhirrr/islamic-rest-api-indonesian/main/data/dataWirid.json'
const random = 'https://python-api-zhirrr.herokuapp.com/api/random/asmaulhusna'

module.exports.asmaulhusna = function asmaulhusna() {
	return new Promise((resolve, reject) => {
		fetch(asmaul)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.tahlil = function tahlil() {
	return new Promise((resolve, reject) => {
		fetch(tahlilan)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.ayatkursi = function ayatkursi() {
	return new Promise((resolve, reject) => {
		fetch(kursi)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.kisahnabi = function kisahnabi(query) {
	return new Promise((resolve, reject) => {
		fetch(nabi+'/api/searchnabi?q=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.wirid = function wirid() {
	return new Promise((resolve, reject) => {
		fetch(wiridd)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.asmaulhusnarandom = function asmaulhusnarandom() {
	return new Promise((resolve, reject) => {
		fetch(random)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}
