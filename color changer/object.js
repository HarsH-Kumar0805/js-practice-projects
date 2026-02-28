// const Jsuser = {
//     name : "harsh",
//     age : 20,
//     location : "patia",
    
// };
// console.log(Jsuser.age)

// const balance = 400;

// if (balance < 500) {
//     console.log("less than");
// }else {
//     console.log("greater than or equal to 500");
// }

//switch


// const month = 1

// switch(month){
//     case 1: 
//     console.log("jan");
//     break;
// }


// for(let j = 0; j <= 10; j++){
//     const element = j;
//     console.log(element);
// }

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


