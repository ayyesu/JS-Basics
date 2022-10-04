/*
//Single-element selector
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('.container'));


//Mutiple-element selector
//console.log(document.querySelectorAll('.item'));

//Looping through items in the DOM
const items = document.querySelectorAll('.item'); 
items.forEach((item) => console.log(item));

//manipulating or changing things in the DOM
const ul = document.querySelector('.items');
//ul.remove(); //removes the ul 
//ul.lastElementChild.remove(); //removes the last element
ul.firstElementChild.textContent = "Waiting.."; //Changes text in first element
ul.children[1].innerText = '...'; //changes the text in second element 
ul.lastElementChild.innerHTML = '<h4>Status: Not a user yet</h4>'; //Inserts an html element

//changing style
const btn = document.querySelector('.btn');
btn.style.background = 'red';

//Events
btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc'; //Dark form after click event
    //document.querySelector('body').classList.add('bg-dark'); // dark body after click event
    document.querySelector('.items').children[0].innerHTML = '<h3>Done</h3>';
    document.querySelector('.items').children[1].innerHTML = '<h3>You are now a user</h3>';
    document.querySelector('.items').children[2].innerHTML = '<h1>Welcome!!</h1>';
})
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error'); //Style the error message / Class 'error' added from css
        msg.innerHTML = 'Please enter all field'; //Sets an alert if condition is met

        setTimeout(() => msg.remove(), 2000); //Removes error message after 3seconds
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
        `${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //clear fields after success
        nameInput.value = '';
        emailInput.value = '';
    }
}