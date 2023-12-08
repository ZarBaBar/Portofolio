let ulang = true;
while (ulang) {
  const angkaRandom = Math.floor(Math.random() * 11);
  let inputUser = parseInt(prompt("Tebak angka 1-10"));
  let nyawa = 3;
  let hasil = "";
  while (nyawa >= 1) {
    if (inputUser > angkaRandom) {
      nyawa -= 1;
      alert(
        "angka yang kamu masukkan terlalu besar " +
          "\n" +
          "nyawa kamu tinggal " +
          nyawa
      );
    } else if (inputUser < angkaRandom) {
      nyawa -= 1;
      alert(
        "angka yang kamu masukkan terlalu kecil " +
          "\n" +
          "nyawa kamu tinggal " +
          nyawa
      );
    } else if (inputUser == angkaRandom) {
      alert("angka yang kamu masukkan benar!");
      break;
    } else {
      alert("masukkan dengan benar");
    }
    if (nyawa === 0) {
      alert("anda telah kalah. \nAngka yang di cari adalah " + angkaRandom);
    }
    inputUser = prompt("Tebak lagi");
  }
  ulang = confirm("lagi?");
}
