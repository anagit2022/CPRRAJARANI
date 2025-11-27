let genderState = null;   // 1 = Raja, 0 = Rani

window.onload = () => {
  // Screens
  const begin1 = document.getElementById("begin1");
  const gender = document.getElementById("gender");
  const intro = document.getElementById("intro");
  const checkdanger = document.getElementById("checkdanger");
  const checkresponse = document.getElementById("checkresponse");
  const checkresponseq = document.getElementById("checkresponseq");
 const checkbreathing = document.getElementById("checkbreathing");

  // Buttons
  const beginBtn = document.getElementById("beginBtn");
  const rajaBtn = document.getElementById("rajaBtn");
  const raniBtn = document.getElementById("raniBtn");
  const startBtn = document.getElementById("startBtn");
  const dyesBtn = document.getElementById("dyesBtn");
  const dnoBtn = document.getElementById("dnoBtn");
  const ryesBtn = document.getElementById("ryesBtn");
  const rnoBtn = document.getElementById("rnoBtn");


  
  beginBtn.onclick = () => {
    begin1.style.display = "none";
    gender.style.display = "flex";
  };

  rajaBtn.onclick = () => {
    genderState = 1;           // ✔ Raja
    console.log("Gender:", genderState);
    introAudio.play();
    gender.style.display = "none";
    intro.style.display = "flex";
  };

  raniBtn.onclick = () => {
    genderState = 0;           // ✔ Rani
    console.log("Gender:", genderState);
    introAudio.play();
    gender.style.display = "none";
    intro.style.display = "flex";
  };
  
  startBtn.onclick = () => {

    intro.style.display = "none";
    checkdanger.style.display = "flex";
    introAudio.pause();
    introAudio.currentTime = 0;
  };
  dyesBtn.onclick = () => {

    checkdanger.style.display = "none";
    checkresponse.style.display = "flex";
    // After 10 seconds → go to breathing screen
  setTimeout(() => {
    checkresponse.style.display = "none";
    checkresponseq.style.display = "flex";
  }, 4000);  // 10000 ms = 10 seconds
  };
  rnoBtn.onclick = () => {

    checkresponseq.style.display = "none";
    checkbreathing.style.display = "flex";
    
  };
  



};
