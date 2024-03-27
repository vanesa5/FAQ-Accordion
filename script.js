// All selector
const plus_icons = document.querySelectorAll('#plus');
const minus_icons = document.querySelectorAll('#minus');
const answers = document.querySelectorAll("#answer")

// singualr selector
const minus_icon = document.querySelector('#minus');
const plus_icon = document.querySelector('#plus');
const answer = document.querySelector("#answer")


// looping through each icons with selector all
for (let i = 0; i < plus_icons.length; i++) {
    plus_icons[i].addEventListener("click", function () {
      minus_icons[i].classList.remove('hidden');
      this.classList.add('hidden');
      answers[i].classList.remove('hidden');
    });
  }



for (let i = 0; i < minus_icons.length; i++) {
    minus_icons[i].addEventListener("click", function () {
      plus_icons[i].classList.remove('hidden');
      this.classList.add('hidden');
      answers[i].classList.add('hidden');
    });
  }

