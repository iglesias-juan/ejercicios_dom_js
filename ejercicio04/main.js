//! 4.1

document.addEventListener(`DOMContentLoaded`, () => {
  const button = document.getElementById(`btnToClick`)

  button.addEventListener(`click`, (Event) => {
    console.log(`Esto es JavaScript!🤯`, Event)
  })
})

//! 4.2

const focus = document.querySelector(`.focus`)

focus.addEventListener(`focus`, function () {
  console.log(focus.value)
})

//! 4.3

const valueInput = document.querySelector(`.value`)

valueInput.addEventListener(`value`, function () {
  console.log(valueInput.value)
})

valueInput.addEventListener(`input`, function () {
  console.log(valueInput.value)
})

//! Bonus track!

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

const body = document.body

const ul = document.createElement(`ul`)

albums.forEach((album) => {
  const li = document.createElement(`li`)
  li.textContent = album

  ul.appendChild(li)
})

body.appendChild(ul)
