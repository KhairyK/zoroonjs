# Selamat Datang Di ZoroonJS

## Apa Itu zoroonJS?
> ZoroonJS Adalah Sebuah Bahasa Pemograman yang Dibuat Dengan JavaScrpt Denagn Metode Lexer.

## Contoh Penggunaan
```zoroon
/* Main.zrn */
go nama = "Sholehuddin"
writeStyle("body { background:#121212; color:lime; font-family:monospace; }")

writeHTML("<h2>Halo, " + nama + "!</h2>")
printInfo("Selamat datang di Zoroon")

trd data = await sendReq("https://jsonplaceholder.typicode.com/todos/1")
writeHTML("<pre>" + JSON.stringify(data, null, 2) + "</pre>")

printWarn("Jangan lupa belajar terus!")
```

Atau Dengan Tag `<script type="text/zoroon"></script>`
```html
<script type="text/zoroon">
go nama = "Sholehuddin"
writeStyle("body { background:#121212; color:lime; font-family:monospace; }")

writeHTML("<h2>Halo, " + nama + "!</h2>")
printInfo("Selamat datang di Zoroon")

trd data = await sendReq("https://jsonplaceholder.typicode.com/todos/1")
writeHTML("<pre>" + JSON.stringify(data, null, 2) + "</pre>")

printWarn("Jangan lupa belajar terus!")
</script>
```

## Cara Mendapatkannya

1. Download Via NPM
```bash
# Jalankan Ini Ke Termux/Terminal kalian
npm install zoroonjs
```

2. Git Clone
```bash
# Jalankan Ini Ke Termux/Terminal kalian
git clone https://github.com/KhairyK/zoroonjs.git
```

3. CDN **npm**
Copy Dan Paste Ke Akhir Tag `<body>`
```html
<script defer src="https://cdn.jsdelivr.net/npm/zoroonjs@latest/zoroon.core.js"></script>
```

4. CDN **gh**
Copy Dan Paste Ke Akhir Tag `<body>`
```html
<script defer src="https://cdn.jsdelivr.net/gh/KhairyK/zoroonjs@0.0.1/zoroon.core.js"></script>
```


<footer align="center">
  <hr>
  <p>🌐 Zoroon Language v0.0.1</p>
  <p>Made with PHPin Labs by <b>Sholehuddin Khairy</b></p>
</footer>



