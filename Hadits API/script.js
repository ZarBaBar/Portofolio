//Mengambil data dari User
const button = document.querySelector(".btn");
const nomorHadits = document.getElementById("numberUser");
const namaImam = document.querySelector(".imam");
const bahasa = document.querySelector(".bahasa");
const hasil = document.querySelector(".hasil");

// Memulai Memproses URL dan Inputan User

// Membuat function
let mulaiHadits = () => {
  //Mengambil Value
  const nomorHaditsValue = nomorHadits.value;
  const namaImamValue = namaImam.value;
  const bahasaValue = bahasa.value;

  //Mengambil URL
  const endpoint = `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/${bahasaValue}-${namaImamValue}/${nomorHaditsValue}.json`;

  //MUlai memproses data API
  fetch(endpoint)
    .then((result) => result.json())
    .then((data) => {
      // Metadata section !
      const metadata = data.metadata;
      const sectionMetadata = metadata.section;

      // Hadiths Section !
      const hadiths = data.hadiths[0];
      const haditsText = hadiths.text;
      const haditsBook = hadiths.reference.book;
      const haditsRef = hadiths.reference.hadith;

      // Nulis ke HTML
      hasil.innerHTML(`
      <div>
      ${sectionMetadata}
      ${haditsText}
      ${haditsBook}
      ${haditsRef}
      </div>
      `);
    })
    .catch((error) => {
      console.log(error);
    });
};

button.addEventListener("click", mulaiHadits);
