// Завдання 1
let categoriesAll = document.getElementsByClassName('item')
console.log('Number of categories: ' + categoriesAll.length)

for (item of categoriesAll) {
    console.log('Category: ' + item.firstElementChild.textContent)
    let sumList = item.lastElementChild.children;
    console.log('Elements: ' + sumList.length)
}


// Завдання 2
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
let ingredientsArray = document.getElementById('ingredients')

for (elem of ingredients) {
    const element = document.createElement("li")
    element.className = "item";
    element.textContent = elem
    ingredientsArray.append(element)
}


// Завдання 3
const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
];

const gallery = document.querySelector(".gallery");
const newTechnologies = ["React", "TypeScript", "Node.js"];
const imgList = images.map((img) => `<img src="${img.url}" alt="${img.alt}">`).join("");
gallery.insertAdjacentHTML("beforeend", imgList);


// Завдання 4
const counterValue = document.getElementById('value')
let count = 0
counterValue.textContent = count;
let increment = document.querySelector("button[data-action='increment']")
let decrement = document.querySelector("button[data-action='decrement']")

increment.addEventListener("click", () => {
    counterValue.textContent = count += 1
  });

decrement.addEventListener("click", () => {
    counterValue.textContent = count -= 1
  });  


// Завдання 5
const name_input = document.getElementById('name-input')
const name_output = document.getElementById('name-output')
name_input.oninput = function() {
  if (name_input.value === "") {
    name_output.innerHTML = 'Anonymous'
  } else {
    name_output.innerHTML = name_input.value;
  }
};


// Завдання 6
const validation_input = document.getElementById('validation-input')
validation_input.oninput = function() {
  if (validation_input.value.length > validation_input.dataset.length) {
    validation_input.className = 'invalid'
  } else {
    validation_input.className = 'valid'
  }
};


// Завдання 7
const size_control = document.getElementById('font-size-control')
const text = document.getElementById('text')
size_control.oninput = function() {
  text.style.fontSize = size_control.value + 'px'
};


// Завдання 8
const form = document.querySelector(".login-form")
form.addEventListener('submit', (event) => {
  event.preventDefault()
  let email = form.elements.email;
  let password = form.elements.password;
  if (email.value == '' || password.value == '') {
    alert('Всі поля повинні бути заповнені.')
  } else {
    let user = {
      email: email.value,
      password: password.value,
    }
    console.log(user)
    form.reset()
  }

})


// Завдання 9 
const color = document.querySelector(".color")
const body = document.querySelector("body")

function getRandomHexColor() {
    let randColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`
    color.textContent = randColor
    body.style.backgroundColor = randColor
}

// Завдання 10

function getRandomHexColor2() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.getElementById('boxes')
const controls = document.getElementById('controls')
let createBtn = document.querySelector("button[data-create]")
let destroyBtn = document.querySelector("button[data-destroy]")

let widthBox = 30;
let heightBox = 30;

const createBoxes = (amount) => {
  amount = controls.firstElementChild.value
  for (let i = 1; i <= amount; i++) {
    let newDiv = document.createElement('div')
    newDiv.className = 'box'
    newDiv.style.backgroundColor = getRandomHexColor2()
    newDiv.style.width = `${widthBox += 10}px`
    newDiv.style.height = `${heightBox += 10}px`
    boxes.append(newDiv)
  }
}

const destroyBoxes = () => {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
  controls.firstElementChild.value = "";
    widthBox = 30;
    heightBox = 30;
}


createBtn.addEventListener("click", createBoxes)
destroyBtn.addEventListener("click", destroyBoxes)