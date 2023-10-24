const buttonElement = document.querySelector('.btn')
const inputElement = document.querySelector('.input')
const headingElement = document.querySelector('.heading')
const listElement = document.querySelector('.list')

const number = 10;
const user = {
  name: 'John',
  city: 'San Francisco',
}

inputElement.value = 'Type bedrijfsnaam'
// buttonElement.disabled = true;
buttonElement.focus();
// headingElement.insertAdjacentHTML('beforebegin', `hi me <span>Beg for me</span>`);
headingElement.innerHTML = `
Hi <span>everyone</span><br />
How are you?
I'm living ${number} years in ${user.city} now.`

// select list items

listElement.addEventListener('click', function (event) {
  console.log(event.target)
})