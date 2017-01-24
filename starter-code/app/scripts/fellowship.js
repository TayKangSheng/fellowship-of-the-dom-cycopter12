console.log('Linked.')

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
]

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
]

var lands = ['The Shire', 'Rivendell', 'Mordor']
var body = document.querySelector('body')

// Part 1

function makeMiddleEarth () {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement('section')
  middleEarth.id = 'middle-earth'
  lands.forEach(function (landName) {
    var land = document.createElement('article')
    var h1 = document.createElement('h1')
    h1.textContent = landName

    land.appendChild(h1)
    middleEarth.appendChild(land)
  })
  body.appendChild(middleEarth)
}

makeMiddleEarth()

// Part 2
var theShire = body.querySelectorAll('article')[0]
var rivendell = body.querySelectorAll('article')[1]
var mordor = body.querySelectorAll('article')[2]
function makeHobbits () {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  // var hobbitLand = document.getElementById('middle-earth').firstElementChild
  var ul = document.createElement('ul')
  hobbits.forEach(function (hobbit) {
    var li = document.createElement('li')
    li.textContent = hobbit
    li.setAttribute('class', 'hobbit')
    ul.appendChild(li)
  })
  theShire.appendChild(ul)
}
makeHobbits()
// Part 3
var frodo = document.querySelector('.hobbit')
function keepItSecretKeepItSafe () {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var theRing = document.createElement('div')
  theRing.id = 'the-ring'
  theRing.className = 'magic-imbued-jewelry'
  theRing.addEventListener('click', nazgulScreech)
  // var frodo = document.getElementsByClassName('hobbit')[0]

  frodo.appendChild(theRing)
}
keepItSecretKeepItSafe()

// Part 4

function makeBuddies () {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var aside = document.createElement('aside')
  var ul = document.createElement('ul')
  buddies.forEach(function (fellowship) {
    var li = document.createElement('li')
    li.textContent = fellowship
    ul.appendChild(li)
  })
  aside.appendChild(ul)
  var rivendell = document.querySelectorAll('article')[1]
  rivendell.appendChild(aside)
}
makeBuddies()
// Part 5

function beautifulStranger () {
  // change the 'Strider' textnode to 'Aragorn'
  var allCharacters = document.getElementsByTagName('li')
  for (var i = 0; i < allCharacters.length; i++) {
    if (allCharacters[i].textContent === 'Strider') {
      allCharacters[i].textContent = 'Aragorn'
      break
    }
  }
}
beautifulStranger()
// Part 6
var hobbits = theShire.querySelector('ul')
function leaveTheShire () {
  // assemble the hobbits and move them to Rivendell
  // var Rivendell = document.querySelector('aside')
  rivendell.appendChild(hobbits)
}
leaveTheShire()
// Part 7
var theFellowship = document.createElement('div')
var theFellowshipOftheRing = rivendell.querySelectorAll('li')
function forgeTheFellowShip () {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party

  theFellowship.setAttribute('id', 'the-fellowship')
  for (var i = 0; i < theFellowshipOftheRing.length; i++) {
    theFellowship.appendChild(theFellowshipOftheRing[i])
  }
  rivendell.appendChild(theFellowship)
}
forgeTheFellowShip()
// Part 8

var newGandalf = theFellowshipOftheRing[0]
function theBalrog () {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  newGandalf.textContent = 'Gandalf the White'
  newGandalf.style.border = '5px solid grey'
  newGandalf.style.background = 'white'
}
theBalrog()

// Part 9
var boromir = theFellowshipOftheRing[4]
function hornOfGondor () {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert('The Horn of Gondor Has Been Blown!')
  boromir.style.textDecoration = 'line-through'
  var list = document.getElementById('the-fellowship')
  list.removeChild(list.childNodes[4])
  // boromir.parentNode.removeChild(boromir)
}
hornOfGondor()
// Part 10

var sam = theFellowshipOftheRing[6]
function itsDangerousToGoAlone () {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  mordor.appendChild(sam)
  mordor.appendChild(frodo)
  var mountDoom = document.createElement('div')
  mountDoom.id = 'mount-doom'
  mordor.appendChild(mountDoom)
}
itsDangerousToGoAlone()
// Part 11

function weWantsIt () {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var gol = document.createElement('div')
  gol.id = 'gollum'
  theRing = frodo.querySelector('#the-ring')
  gol.appendChild(theRing)
  var mountDoom = mordor.querySelector('#mount-doom')
  mountDoom.appendChild(gol)
}
weWantsIt()
// Part 12

function thereAndBackAgain () {
  // remove Gollum and the Ring from the document
  // remove all the buddies from the document
  // Move all the hobbits back to the shire
  var mount = document.getElementById('mount-doom')
  var gollum = document.getElementById('gollum')
  mount.removeChild(gollum)
  var allHobbitsList = document.createElement('ul')
  var hobbits = body.querySelectorAll('.hobbit')
  for (var i = 0; i < hobbits.length; i++) {
    allHobbitsList.appendChild(hobbits[i])
  }
  theShire.appendChild(allHobbitsList)
  var fellowship = document.querySelector('#the-fellowship')
  var rivendell = document.querySelector('article:nth-child(2)')
  rivendell.removeChild(fellowship)
}
thereAndBackAgain()
