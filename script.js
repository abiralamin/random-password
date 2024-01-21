let myId = document.getElementById("myH1");
let mybtn = document.getElementById("myBtn");
let randomPassword = [];

myBtn.onclick = function () {
  const passwordCombination =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+^";

  for (let i = 0; i <= 11; i++) {
    let randomNumber = Math.floor(Math.random() * passwordCombination.length);
    randomPassword[i] = passwordCombination.charAt(randomNumber);
  }
  let finalPassword = randomPassword.join("");
  console.log(finalPassword);
  myId.textContent = `Rendom Password Is : ${finalPassword}`;
};