let nomorIU = parseInt(prompt("Masukkan nomor hadits yang mau di cari!"));

const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ind-bukhari/${nomorIU}.min.json`;

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data.hadiths[0].text))
  .catch((error) => console.error(error));
