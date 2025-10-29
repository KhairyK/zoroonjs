document.addEventListener("DOMContentLoaded", async () => {
  const zoroonScripts = document.querySelectorAll('script[type="text/zoroon"]');
  for (const s of zoroonScripts) {
    let code = "";
    const src = s.getAttribute("src");
    if (src) {
      const res = await fetch(src);
      code = await res.text();
    } else {
      code = s.textContent;
    }
    await runZoroon(code);
  }
});

async function runZoroon(rawCode) {
  console.log("%c⚙️ Zoroon Runtime v0.0.1 loaded", "color:#48f;font-weight:bold;");

  try {
    let code = rawCode
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\bgo\b/g, "const")
      .replace(/\btrd\b/g, "let")
      .replace(/\bvarn\b/g, "var");

    const sendReq = async (url, method = "GET", data = null) => {
      const opt = { method, headers: { "Content-Type": "application/json" } };
      if (data) opt.body = JSON.stringify(data);
      const res = await fetch(url, opt);
      return await res.json();
    };

    const sleep = (ms) => new Promise(r => setTimeout(r, ms));

    const importZoroon = async (path) => {
      const res = await fetch(path);
      await runZoroon(await res.text());
    };

    const writeHTML = (html) => {
      const container = document.createElement("div");
      container.innerHTML = html;
      document.body.appendChild(container);
    };

    const writeStyle = (css) => {
      const style = document.createElement("style");
      style.textContent = css;
      document.head.appendChild(style);
    };

    const print = console.log;
    const printError = console.error;
    const printWarn = console.warn;
    const printInfo = console.info;

    const wrappedCode = `
      "use strict";
      return (async function __zoroonMain() {
        try {
          ${code}
        } catch (e) {
          console.error("Zoroon Script Error:", e);
        }
      })();
    `;

    const func = new Function(
      "sendReq", "sleep", "importZoroon", "writeHTML", "writeStyle",
      "print", "printError", "printWarn", "printInfo",
      wrappedCode
    );

    await func(sendReq, sleep, importZoroon, writeHTML, writeStyle, print, printError, printWarn, printInfo);
  } catch (e) {
    console.error("Error Zoroon:", e.message);
  }
}

