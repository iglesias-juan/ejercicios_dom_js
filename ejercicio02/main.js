//! 2.1

// const newDiv = document.createElement(`div`)
// document.body.appendChild(newDiv)

//! 2.2

// const newDiv = document.createElement(`div`)
// const newP = document.createElement(`p`)
// newDiv.appendChild(newP)
// document.body.appendChild(newDiv)

//! 2.3

const newDiv = document.createElement(`div`)
for (let i = 1; i <= 6; i++) {
  const newP = document.createElement(`p`)
  newDiv.appendChild(newP)
}
document.body.appendChild(newDiv)

//! 2.4

const newP = document.createElement(`p`)
newP.textContent = 'Soy dinámico!'
document.body.appendChild(newP)

//! 2.5

const newSubtitle = document.querySelector(`.fn-insert-here`)
newSubtitle.textContent = `Wubba Lubba dub dub`

//! 2.6

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement(`ul`)
apps.forEach((app) => {
  const li = document.createElement(`li`)
  li.textContent = app
  ul.appendChild(li)
})
document.body.appendChild(ul)

//! 2.7

const itemsToRemove = document.querySelectorAll(`.fn-remove-me`)
itemsToRemove.forEach((Element) => {
  Element.remove()
})

//! 2.8

const newParagraph = document.createElement(`p`)
newParagraph.textContent = 'Voy en medio!'
const secondDiv = document.querySelectorAll(`div`)[1]
secondDiv.insertAdjacentElement(`beforebegin`, newParagraph)

//! 2.9

const divsToChange = document.querySelectorAll(`div.fn-insert-here`)
divsToChange.forEach((div) => {
  const insertParagraph = document.createElement(`p`)
  insertParagraph.textContent = `Voy dentro!`
  div.appendChild(insertParagraph)
})
