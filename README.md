# Zhirrr-Api
Official Zhirrr Api NPM Package

#### Jika ada masalah di dalam web api, langsung laporkan aja yak :)

## Installasi

Via NPM:
```bash
$ npm install zhirrr-api
```

## Cara Menggunakan

```js
const zahir = require('zhirrr-api');

/*
zahir.jenis-modul.nama-modul(params)
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
| asmaulhusna | - | - | json | Menampilkan Data Asmaul Husna Full 99 |
| asmaulhusnarandom | - | - | json | Menampilkan Data Asmaul Husna Secara Random |
| tahlil | - | - | json | Menampilkan Data Doa Tahlil |
| ayatkursi | - | - | json | Menampilkan Data Doa Ayat Kursi |
| kisahnabi | nabi | nama nabi | json | Menampilkan Kisah 25 Nabi |
| wirid | - | - | json | Menampilkan Data Doa Wirid |

</details>

### Edukasi

```js
//Contoh!
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

### Gambar

```js
//Contoh!
zahir.gambar.programming()
.then(res => console.log(res))
.catch(err => console.log(err))

zahir.gambar.muslim()
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>List dari modul di atas (jenis-modul = gambar)</b> (tekan untuk melihat)</summary>

| nama modul | params | thing | response | description |
| :--- | :---------- | :--- | :--- | :--- |
| technology | - | - | json | Gambar Wallpaper Nuansa Technology |
| programming | - | - | json | Gambar Wallpaper Nuansa Programming |
| cyberspace | - | - | json | Gambar Wallpaper Nuansa Cyberspace |
| muslim | - | - | json | Gambar Wallpaper Nuansa Islami |
| mountain | - | - | json | Gambar Wallpaper Nuansa Pegunungan |

</details>

### Other

```js
//Contoh!
zahir.other.fakename("en")
.then(res => console.log(res))
.catch(err => console.log(err))

zahir.other.kodepos("jakarta")
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>List dari modul di atas (jenis-modul = other)</b> (tekan untuk melihat)</summary>

| nama modul | params | thing | response | description |
| :--- | :---------- | :--- | :--- | :--- |
| fakename | country | kode negara | json | Menampilkan Bio Data Orang Secara Random |
| cekip | ip | nomor ip | json | Cek/Track IP Dengan Nomor IP |
| kodepos | q | nama daerah | json | Cek Kodepos |
| hilih | kata | kata | json | Hilih Generator |
| shortlink | url | url | json | Short Link Tinyurl |
| searchlirik | search | lagu | json | Cari Lirik Lagu Dengan Mudah |
| searchchord | q | lagu | json | Cari Chord Lagu Dengan Mudah |
| randomquotes | - | - | json | Menampilkan Quotes Secara Random |

</details>

### Link Packages

https://www.npmjs.com/package/zhirrr-api
