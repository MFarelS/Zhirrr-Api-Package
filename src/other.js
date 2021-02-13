const fetch = require('node-fetch');
const pos = 'https://kodepos-api-zhirrr.vercel.app'
const palsu = 'https://fakename-api-zhirrr.vercel.app'
const cek = 'https://cek-ip-zhirrr.vercel.app'
const hayuk = 'https://hilih-api-zhirrr.vercel.app'
const short = 'https://short-api-zhirrr.vercel.app'
const python = 'https://python-api-zhirrr.herokuapp.com'


module.exports.fakename = function fakename(query) {
	return new Promise((resolve, reject) => {
		fetch(palsu+'/api/fakename?country=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.cekip = function cekip(query) {
	return new Promise((resolve, reject) => {
		fetch(cek+'/api/cek?ip=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.kodepos = function kodepos(query) {
	return new Promise((resolve, reject) => {
		fetch(pos+'/?q=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.hilih = function hilih(query) {
	return new Promise((resolve, reject) => {
		fetch(hayuk+'/api/hilih?kata=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.shortlink = function shortlink(query) {
	return new Promise((resolve, reject) => {
		fetch(short+'/api/short?url=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.searchlirik = function searchlirik(query) {
	return new Promise((resolve, reject) => {
		fetch(python+'/api/lirik?search=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.searchchord = function searchchord(query) {
	return new Promise((resolve, reject) => {
		fetch(python+'/api/chord?q=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.randomquotes = function randomquotes() {
	return new Promise((resolve, reject) => {
		fetch(python+'/api/random/quotes')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}
