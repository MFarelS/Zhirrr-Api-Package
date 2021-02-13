const fetch = require('node-fetch')
const base = 'https://wallpaper-api-zhirrr.vercel.app'

module.exports.technology = function technology() {
	return new Promise((resolve, reject) => {
		fetch(base+'/api/technology')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.programming = function programming() {
	return new Promise((resolve, reject) => {
		fetch(base+'/api/programming')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.cyberspace = function cyberspace() {
	return new Promise((resolve, reject) => {
		fetch(base+'/api/cyberspace')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.muslim = function muslim() {
	return new Promise((resolve, reject) => {
		fetch(base+'/api/islamic')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.mountain = function mountain() {
	return new Promise((resolve, reject) => {
		fetch(base+'/api/mountain')
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}
