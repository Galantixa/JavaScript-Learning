// Events Handling


// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function () {
//     card.style.display = 'none';
// });

// DOM Traversal


const close = document.querySelectorAll ('.close');
// const card = document.querySelectorAll('.card');

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function (e) {
//     // card[i].style.display = 'none';
//     // close[i].parentElement.style.display = 'none';
//     // console.log(e.target);
//     e.target.parentElement.style.display = 'none';
//     });
// }


// DOM Prevent Default

close.forEach(function(el){
    el.addEventListener('click', function(e) {
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
    e.stopPropagation();

    });
});


// const nama = document.querySelector('.nama');
// console.log(nama.nextElementSibling);
 
// DOM Stop Propagation
const cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
    card.addEventListener('click', function(e) {
    alert('ok');
    })
}); 

