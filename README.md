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

Atau Dengan Tag `<script src="Main.zrn" type="text/zoroon"></script>`
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

<footer align="center">
  <hr>
  <p>🌐 Zoroon Language v0.0.1</p>
  <p>Made with PHPin Labs by <b>Sholehuddin Khairy</b></p>
</footer>



