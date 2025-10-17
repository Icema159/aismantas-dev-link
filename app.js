// app.js
const HUB_URL = "https://aismantas.dev.link";

const qr = new QRCode(document.getElementById("qrcode"), {
    text: HUB_URL,
    width: 220,
    height: 220,
    correctLevel: QRCode.CorrectLevel.M,
});

document.getElementById("download-qr").addEventListener("click", () => {
    const img = document.querySelector("#qrcode img");
    const canvas = document.querySelector("#qrcode canvas");

    if (img && img.src) {
        const link = document.createElement("a");
        link.href = img.src;
        link.download = "aismantas-dev-link-qr.png";
        link.click();
    } else if (canvas) {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "aismantas-dev-link-qr.png";
        link.click();
    }
});

// CV failo tikrinimas
fetch("./cv/Aismantas-Skinulis-CV.pdf", { method: "HEAD" })
    .then(res => {
        if (!res.ok) throw new Error();
    })
    .catch(() => {
        const sub = document.querySelector("#cv-link .sub");
        if (sub) sub.textContent = "įkelk CV į /cv katalogą";
    });

// Metų atnaujinimas
document.getElementById("year").textContent = new Date().getFullYear();