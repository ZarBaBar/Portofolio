let tanya = true;
while (tanya) {
  // menentukan pilihan player
  let player = prompt("Pilih = Gajah, Semut, Orang!");

  // menentukan pilihan player
  // membangkitkan pilihan random
  let comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "semut";
  } else {
    comp = "orang";
  }

  let hasil = "";

  // menentukan rules
  if (player == comp) {
    hasil = "SERI DEK";
  } else if (player == "gajah") {
    // if (comp == "orang") {
    //   hasil == "HOKI DEK LU MENANG";
    // } else {
    //   hasil = "LAWAK KALAH";
    // }
    hasil = comp == "semut" ? "LAWAK KALAH" : "HOKI MENANG";
  } else if (player == "orang") {
    hasil = comp == "gajah" ? "LAWAK KALAH" : "HOKI MENANG";
  } else if (player == "semut") {
    hasil = comp == "orang" ? "LAWAH KALAH" : "HOKI MENANG";
  } else {
    hasil = "ERROR!!!";
  }
  alert(
    "kamu memilih " +
      player +
      "\n" +
      "computer memilih " +
      comp +
      "\n" +
      "maka hasilnya adalah = " +
      hasil
  );
  tanya = confirm("lagi?");
}
alert("TERIMAKASIH TELAH BERMAIN ❤🙏🏼");
