function getPilihanComputer() {
  let comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "semut";
  return "orang";
}

function getHasil(comp, player) {
  // menentukan rules
  if (player == comp) return "SERI DEK";
  if (player == "gajah") return comp == "semut" ? "LAWAK KALAH" : "HOKI MENANG";
  if (player == "orang") return comp == "gajah" ? "LAWAK KALAH" : "HOKI MENANG";
  if (player == "semut") return comp == "orang" ? "LAWAH KALAH" : "HOKI MENANG";
}

function putar() {
  const imgKomputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgKomputer.setAttribute("src", "../img/" + gambar[i++] + ".jpeg");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "../img/" + pilihanComputer + ".jpeg");

      const infoHasil = document.querySelector(".info");
      infoHasil.innerHTML = hasil;
    }, 1000);
  });
});

// CARA KURANG EFEKTIF / PANJANG
// const playerGajah = document.querySelector(".gajah");
// playerGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = playerGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "../img/" + pilihanComputer + ".jpeg");

//   const infoHasil = document.querySelector(".info");
//   infoHasil.innerHTML = hasil;
// });

// const playerSemut = document.querySelector(".semut");
// playerSemut.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = playerSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "../img/" + pilihanComputer + ".jpeg");

//   const infoHasil = document.querySelector(".info");
//   infoHasil.innerHTML = hasil;
// });

// const playerOrang = document.querySelector(".orang");
// playerOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = playerOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "../img/" + pilihanComputer + ".jpeg");

//   const infoHasil = document.querySelector(".info");
//   infoHasil.innerHTML = hasil;
// });
