const fetch = require('node-fetch')
const base = 'https://sosmed-api-zhirrr.vercel.app'
const facebook = 'https://fb-api-zhirrr.vercel.app'

module.exports.igstalk = function igstalk(query) {
	return new Promise((resolve, reject) => {
		fetch(base+'/api/ig/stalk?user=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.igdown = function igdown(query) {
	return new Promise((resolve, reject) => {
		fetch(base+'/api/ig?url=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.tiktokdown = function tiktokdown(query) {
	return new Promise((resolve, reject) => {
		fetch(base+'/api/tiktok?url=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.fbdown = function fbdown(query) {
	return new Promise((resolve, reject) => {
		fetch(facebook+'/?url=' + encodeURIComponent(query))
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}
