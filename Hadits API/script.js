// Mengambil data dari HTML

const button = document.querySelector(".btn");
const result = document.querySelector(".hasil");

// Data URL

button.addEventListener("click", () => {
  let imamPilihanUser = document.querySelector(".imam").value;
  let bahasaPilihanUSer = document.querySelector(".bahasa").value;
  let inputNumberUser = document.getElementById("numberUser").value;
  const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/${bahasaPilihanUSer}-${imamPilihanUser}/${inputNumberUser}.json`;
  console.log(url);
});
