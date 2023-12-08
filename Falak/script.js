// Satuan Hari
const satuMinggu = [
  "Sabtu",
  "Ahad",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
  "Ahad",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
];
const hariJawir = [
  "Kliwon",
  "Legi",
  "Pahing",
  "Pon",
  "Wage",
  "Kliwon",
  "Legi",
  "Pahing",
  "Pon",
  "Wage",
];
const enterButton = document.getElementById('button')
enterButton.addEventListener('click', function(){

  const inputUser = document.getElementById('iUser').value
  // let inputUser = document.getElementById("iUser");
  // inputUser.addEventListener("input", function () {
  let masukanUser = inputUser;
  // document.writeln(`Pada Tahun ${masukanUser}, `);
  // Rumus awal = tahun tam
  masukanUser -= 1;
  
  
  // Rumus 400
  let rumus400 = parseInt(masukanUser / 400);
  let rumusTotalKali1 = parseInt(400 * rumus400);
  let rumusKali7 = parseInt(rumus400 * 7);
  const rumusER1 = {
    "Hasil Pembagian": rumus400,
    "Hasil Bagi dikali 400": rumusTotalKali1,
    "Hasil Bagi dikali 7": rumusKali7,
  };
  
  // Rumus 100
  let rumusPengurangan1 = masukanUser - rumusTotalKali1;
  let rumus100 = parseInt(rumusPengurangan1 / 100);
  let rumusTotalKali2 = parseInt(100 * rumus100);
  let rumusKali51 = parseInt(rumus100 * 5);
  let rumusER2 = {
    "Hasil Pengurangan": rumusPengurangan1,
    "Hasil Pembagian": rumus100,
    "Hasil Bagi dikali 100": rumusTotalKali2,
    "Hasil Bagi dikali 5": rumusKali51,
  };
  
  // Rumus 4
  let rumusPengurangan2 = rumusPengurangan1 - rumusTotalKali2;
  let rumus4 = parseInt(rumusPengurangan2 / 4);
  let rumusTotalKali3 = parseInt(4 * rumus4);
  let rumusKali52 = parseInt(rumus4 * 5);
  let rumusER3 = {
    "Hasil Pengurangan": rumusPengurangan2,
    "Hasil Pembagian": rumus4,
    "Hasil Bagi dikali 4": rumusTotalKali3,
    "Hasil Bagi dikali 5": rumusKali52,
  };
  
  // Rumus akhir
  let hasilAkhir = rumusPengurangan2 - rumusTotalKali3;
  let totalAkhir = 2 + hasilAkhir + rumusKali7 + rumusKali51 + rumusKali52;
  let pembagiHari = parseInt(totalAkhir / 7);
  let phKali7 = parseInt(pembagiHari * 7);
  let penguranganHari = totalAkhir - phKali7;
  let hasilHari = satuMinggu[penguranganHari];
  let cloneHasilHari = hasilHari;
  let rumusER4 = {
    "Hasil Pengurangan ke-1": hasilAkhir,
    "Total Pertambahan Dari Hasil Perkalian (ditambah qaidah 2)": totalAkhir,
    "Hasil Total dibagi 7": pembagiHari,
    "Hasil Pembagian 7 dikali 9": phKali7,
    "Hasil Pengurangan ke-2": penguranganHari,
    "Hasil Hari Pada Awal Tahun": cloneHasilHari, //!!! KETIKA HASIL 0 MAKA YANG KELUAR ADALAH UNDEFINED!!!
  };
  
  // Rumus Hari Jawir
  let hasilKali2 = rumus400 * 2;
  let hasilKali4 = rumus100 * 4;
  let hasilKali1 = rumus4 * 1;
  let hasilKali5 = hasilAkhir * 5;
  let hasilPenambahanSemua =
    2 + hasilKali2 + hasilKali4 + hasilKali1 + hasilKali5;
  let hasilPembagian = parseInt(hasilPenambahanSemua / 5);
  let hasilPerkalian = parseInt(hasilPembagian * 5);
  let hasilPengurangan = parseInt(hasilPenambahanSemua - hasilPerkalian);
  let hasilHariJawir = hariJawir[hasilPengurangan];
  let cloneHasilHariJawir = hasilHariJawir;
  let rumusER5 = {
    "Hasil Kali 2": hasilKali2,
    "Hasil Kali 4": hasilKali4,
    "Hasil Kali 1": hasilKali1,
    "Hasil Kali 5": hasilKali5,
    "Hasil Penjumlahan (qaidah di tambah 2)": hasilPenambahanSemua,
    "Hasil dibagi 5": hasilPembagian,
    "Hasil dikali 5": hasilPerkalian,
    "Hasil Pengurangan": hasilPengurangan,
    "Hasil Hari Pasaran": cloneHasilHariJawir, // !!!KETIKA HASILNYA 0 MAKA HASIL HARI YANG KELUAR ADALAH UNDEFINED!!!
  };
  
  // Check Kabisat Basithah
  let kbstbsth = "";
  let febr = "";
  let bagi100 = inputUser
  bagi100 %= 100
  bagi100 %= 4;
  if (bagi100 == 0) {
    kbstbsth = "Kabisat";
    febr = "29 Hari";
  } else {
    kbstbsth = "Basithah";
    febr = "28 Hari";
  }
  let hasilHitungTahun = {
    "Jenis Tahun": kbstbsth,
    "Februari terdapat": febr,
  };
  
  // Menghitung hari pertama dalam bulan selanjutnya (KABISAT)
  let awalBulanKab = {
    Januari: { Hari: hasilHari, Pasaran: hasilHariJawir },
    Februari: {
      Hari: satuMinggu[penguranganHari + 4 - 1],
      Pasaran: hariJawir[hasilPengurangan + 2 - 1],
    },
    Maret: {
      Hari: satuMinggu[penguranganHari + 5 - 1],
      Pasaran: hariJawir[hasilPengurangan + 1 - 1],
    },
    April: {
      Hari: satuMinggu[penguranganHari + 1 - 1],
      Pasaran: hariJawir[hasilPengurangan + 2 - 1],
    },
    Mei: {
      Hari: satuMinggu[penguranganHari + 3 - 1],
      Pasaran: hariJawir[hasilPengurangan + 2 - 1],
    },
    Juni: {
      Hari: satuMinggu[penguranganHari + 6 - 1],
      Pasaran: hariJawir[hasilPengurangan + 3 - 1],
    },
    Juli: {
      Hari: satuMinggu[penguranganHari + 1 - 1],
      Pasaran: hariJawir[hasilPengurangan + 3 - 1],
    },
    Agustus: {
      Hari: satuMinggu[penguranganHari + 4 - 1],
      Pasaran: hariJawir[hasilPengurangan + 4 - 1],
    },
    September: {
      Hari: satuMinggu[penguranganHari + 7 - 1],
      Pasaran: hariJawir[hasilPengurangan + 5 - 1],
    },
    Oktober: {
      Hari: satuMinggu[penguranganHari + 2 - 1],
      Pasaran: hariJawir[hasilPengurangan + 5 - 1],
    },
    November: {
      Hari: satuMinggu[penguranganHari + 5 - 1],
      Pasaran: hariJawir[hasilPengurangan + 1 - 1],
    },
    Desember: {
      Hari: satuMinggu[penguranganHari + 7 - 1],
      Pasaran: hariJawir[hasilPengurangan + 1 - 1],
    },
  };
  
  let awalBulanBas = {
    Januari: { Hari: hasilHari, Pasaran: hasilHariJawir },
    Februari: {
      Hari: satuMinggu[penguranganHari + 4 - 1],
      Pasaran: hariJawir[hasilPengurangan + 2 - 1],
    },
    Maret: {
      Hari: satuMinggu[penguranganHari + 4 - 1],
      Pasaran: hariJawir[hasilPengurangan + 5 - 1],
    },
    April: {
      Hari: satuMinggu[penguranganHari + 7 - 1],
      Pasaran: hariJawir[hasilPengurangan + 1 - 1],
    },
    Mei: {
      Hari: satuMinggu[penguranganHari + 2 - 1],
      Pasaran: hariJawir[hasilPengurangan + 1 - 1],
    },
    Juni: {
      Hari: satuMinggu[penguranganHari + 5 - 1],
      Pasaran: hariJawir[hasilPengurangan + 2 - 1],
    },
    Juli: {
      Hari: satuMinggu[penguranganHari + 7 - 1],
      Pasaran: hariJawir[hasilPengurangan + 2 - 1],
    },
    Agustus: {
      Hari: satuMinggu[penguranganHari + 3 - 1],
      Pasaran: hariJawir[hasilPengurangan + 3 - 1],
    },
    September: {
      Hari: satuMinggu[penguranganHari + 6 - 1],
      Pasaran: hariJawir[hasilPengurangan + 4 - 1],
    },
    Oktober: {
      Hari: satuMinggu[penguranganHari + 1 - 1],
      Pasaran: hariJawir[hasilPengurangan + 4 - 1],
    },
    November: {
      Hari: satuMinggu[penguranganHari + 4 - 1],
      Pasaran: hariJawir[hasilPengurangan + 5 - 1],
    },
    Desember: {
      Hari: satuMinggu[penguranganHari + 6 - 1],
      Pasaran: hariJawir[hasilPengurangan + 5 - 1],
    },
  };
  
  let hasilAwalBulan = undefined;
  // mengetest apakah tahun itu kabisat atau basithah, agar bisa menentukan rumus awal bulan
  if (kbstbsth === "Kabisat") {
    hasilAwalBulan = awalBulanKab;
  } else {
    hasilAwalBulan = awalBulanBas;
  }
  // Mengconsole
  // const tabel = document.createElement("table")
  // const tr1 = document.createElement("tr")
  // const td1 = document.createElement('td')
  // const ER1 = document.createTextNode(rumusER1)
  // const divTabel = document.querySelector('.tabel')

  // td1.appendChild(ER1)
  // tr1.appendChild(td1)
  // tabel.appendChild(ER1)
  // const tabel = tableToHTMLTable(rumusER1)
  // divTabel.appendChild(tabel)

  // const object = {
  //   name: "John Doe",
  //   age: 30,
  //   city: "Jakarta",
  // };
  
  // const table = (object);
  
  // document.body.appendChild(table);
  

  console.table(rumusER1);
  console.table(rumusER2);
  console.table(rumusER3);
  console.table(rumusER4);
  console.table(rumusER5);
  console.table(hasilHitungTahun);
  console.table(hasilAwalBulan);
  
  let hasilAKHIRNYAAA = `Hari ${cloneHasilHari}, Hari Pasaran ${cloneHasilHariJawir}, Tahun ${kbstbsth}, Februari ${febr}`;
  // document.writeln(hasilAKHIRNYAAA);
  console.log(inputUser);
  
  
})


// });
