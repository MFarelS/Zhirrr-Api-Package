# ArugaZ-Api
Official Zhirrr Api NPM Package

#### Jika ada masalah di dalam web api, langsung laporkan aja yak :)

## Installation

Via NPM:
```bash
$ npm install @zahirr/zhirrr-api
```

## Cara Menggunakan

```js
const zahirr = require('@zahirr/zhirrr-api');

/*
zahirr.jenis-modul.nama-modul(params)
.then(res => console.log(res))
.catch(err => console.log(err))
*/
```

### Social Media

```js
//Contoh!
zahir.sosmed.igstalk('zhirr_ajalah')
.then(res => console.log(res))
.catch(err => console.log(err))

zahir.sosmed.igdown('https://www.instagram.com/p/CK5Sx1IBBjV/')
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>List dari modul di atas (jenis-modul = sosmed)</b> (click to show)</summary>

| nama modul | params | thing | response | description |
| :--- | :---------- | :--- | :--- | :--- |
| fbdown | url | facebook url | json | Download Facebook Video |
| tiktokdown | url | tiktok url | json |  Download Tiktok Video |
| igdown | url | instagram url | json | Download Instagram Post Atau Video |
| igstalk | user | instagram username | json |  Cari Instagram Bio, Profile |

</details>

### Muslim

```js
//Contoh!
zahir.muslim.kisahnabi("muhammad")
.then(res => console.log(res))
.catch(err => console.log(err))

zahir.muslim.wirid()
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>Lists dari modul di atas (jenis-modul = muslim)</b> (tekan untuk melihat)</summary>

| nama modul | params | thing | response | description |
| :--- | :---------- | :--- | :--- | :--- |
| asmaulhusna | - | - | json | Menampilkan Data Asmaul Husna |
| tahlil | - | - | json | Menampilkan Data Doa Tahlil |
| ayatkursi | - | - | json | Menampilkan Data Doa Ayat Kursi |
| kisahnabi | nabi | nama nabi | json | Menampilkan Kisah 25 Nabi |
| wirid | - | - | json | Menampilkan Data Doa Wirid |

</details>

### Edukasi

```js
//Example!
zahir.edukasi.covidindo()
.then(res => console.log(res))
.catch(err => console.log(err))

zahir.edukasi.infogempa()
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>List dari modul di atas (jenis-modul = edukasi)</b> (tekan untuk melihat)</summary>

| nama modul | params | thing | response | description |
| :--- | :---------- | :--- | :--- | :--- |
| covidworld | - | - | json | Data Covid Dunia |
| covidindo | - | - | json | Data Covid Indonesia |
| infogempa | - | - | json | Data Gempa Yg Terjadi Sekarang |
| kbbi | text | kata | json | Data KBBI |

</details>
