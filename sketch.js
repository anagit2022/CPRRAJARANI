let genderState = null;   // 1 = Raja, 0 = Rani

window.onload = () => {
  // Screens
  const begin1 = document.getElementById("begin1");
  const gender = document.getElementById("gender");
  const intro = document.getElementById("intro");
  const checkdanger = document.getElementById("checkdanger");
  const introAudio = document.getElementById("introAudio");



  // Buttons
  const beginBtn = document.getElementById("beginBtn");
  const rajaBtn = document.getElementById("rajaBtn");
  const raniBtn = document.getElementById("raniBtn");
  const startBtn = document.getElementById("startBtn");

  
  beginBtn.onclick = () => {
    begin1.style.display = "none";
    gender.style.display = "flex";
  };

  rajaBtn.onclick = () => {
    genderState = 1;           // ✔ Raja
  introAudio.play();
  console.log("Gender:", genderState);

    gender.style.display = "none";
    intro.style.display = "flex";
  };

  raniBtn.onclick = () => {
    genderState = 0;           // ✔ Rani
    introAudio.play();
    console.log("Gender:", genderState);

    gender.style.display = "none";
    intro.style.display = "flex";
  };
  
  startBtn.onclick = () => {

    intro.style.display = "none";
    checkdanger.style.display = "flex";
  };
};
