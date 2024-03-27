const plus_icons = document.querySelectorAll('#plus');
const minus_icons = document.querySelectorAll('#minus');
const answers = document.querySelectorAll("#answer")


const minus_icon = document.querySelector('#minus');
const plus_icon = document.querySelector('#plus');

const answer = document.querySelector("#answer")



// This works for the first faq1
// plus_icon.addEventListener("click", function (){

//     minus_icon.classList.remove('hidden');
//     this.classList.add('hidden')
//     answer.classList.remove('hidden')
    
// })

// minus_icon.addEventListener("click", function (){

//     this.classList.add('hidden');
//     plus_icon.classList.remove('hidden')
//     answer.classList.add('hidden')   

// })

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

// foreach attamept

// plus_icons.forEach((icon) => {
//     icon.addEventListener("click", () => {

        
//             minus_icon.classList.remove('hidden');
//             icon.classList.add('hidden')
//             answer.classList.remove('hidden')
            
//         })
// }
// )

// minus_icons.forEach((icon) => {
//     icon.addEventListener("click",() => {

//             icon.classList.add('hidden');
//             plus_icon.classList.remove('hidden')
//             answer.classList.add('hidden')
//     })
            
//         })
