//! 3.1

// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

// document.addEventListener(`DOMContentLoaded`, () => {
//   const printHere = document.querySelector(`[data-function="printHere"]`)
//   const ul = document.createElement(`ul`)
//   countries.forEach((country) => {
//     const li = document.createElement(`li`)
//     li.textContent = country
//     ul.appendChild(li)
//   })

//   printHere.appendChild(ul)
// })

//! 3.2

const itemToRemove = document.querySelector(`.fn-remove-me`)
if (itemToRemove) {
  itemToRemove.remove()
}

//! 3.3

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

document.addEventListener(`DOMContentLoaded`, () => {
  const printHere = document.querySelector(`[data-function="printHere"]`)
  const ul = document.createElement(`ul`)
  cars.forEach((car) => {
    const li = document.createElement(`li`)
    li.textContent = car
    ul.appendChild(li)
  })

  printHere.appendChild(ul)
})

//! 3.4

const countries = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

// document.addEventListener(`DOMContentLoaded`, () => {
//   countries.forEach((country) => {
//     const newDiv = document.createElement(`div`)

//     const newTitle = document.createElement(`h4`)
//     newTitle.textContent = country.title

//     const newImg = document.createElement(`img`)
//     newImg.src = country.imgUrl

//     newDiv.appendChild(newTitle)
//     newDiv.appendChild(newImg)

//     document.body.appendChild(newDiv)
//   })
// })

//! 3.5

// const button = document.createElement(`button`)
// button.textContent = `Eliminar`
// document.body.appendChild(button)

// button.addEventListener(`click`, () => {
//   const divs = document.querySelectorAll(`div`)
//   if (divs.length > 0) {
//     document.body.removeChild(divs[divs.length - 1])
//   }
// })

//! 3.6

document.addEventListener(`DOMContentLoaded`, () => {
  countries.forEach((country) => {
    const newDiv = document.createElement(`div`)

    const newTitle = document.createElement(`h4`)
    newTitle.textContent = country.title

    const newImg = document.createElement(`img`)
    newImg.src = country.imgUrl

    const button = document.createElement(`button`)
    button.textContent = `Eliminar`

    button.addEventListener(`click`, () => {
      document.body.removeChild(newDiv)
    })

    newDiv.appendChild(newTitle)
    newDiv.appendChild(newImg)
    newDiv.appendChild(button)

    document.body.appendChild(newDiv)
  })
})
