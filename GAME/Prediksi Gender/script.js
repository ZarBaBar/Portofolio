const base_api = "https://api.genderize.io";
let probabilityFemale = null;
let probabilityMale = null;
const female = document.querySelector(".femaleHsl");
const male = document.querySelector(".maleHsl");
const nama = document.querySelector(".nama");

function showResult(name, gender, probability) {
  const probabilityPercentage = probability * 100;
  let femaleProbability = null;
  let maleProbability = null;

  if (gender === "male") {
    maleProbability = probabilityPercentage;
    femaleProbability = 100 - maleProbability;
  } else {
    femaleProbability = probabilityPercentage;
    maleProbability = 100 - femaleProbability;
  }

  female.innerHTML = `
  <div class=" hasil">
     <h3>${femaleProbability}%</h3>
  </div>
  `;
  male.innerHTML = `
  <div class=" hasil">
  <h3>${maleProbability}%</h3>
</div>
  `;

  nama.innerHTML = `
  <h1>HALO ${name.toUpperCase()}!</h1>
  `;
}

async function predict(event) {
  if (event.key === "Enter") {
    const firstName = event.target.value;
    const queryUrl = `${base_api}/?name=${firstName}&country_id=ID`;

    const response = await fetch(queryUrl);
    const result = await response.json();
    showResult(result.name, result.gender, result.probability);
  }
}
