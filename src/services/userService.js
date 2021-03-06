import { storageService } from './storageService'
const USER_KEY = 'user'
let loggedInUser

export const userService = {
  getUser,
  signUp,
  addMove,
}

function getUser() {
  let user = storageService.load(USER_KEY)
  return user
}

// function getEmptyUser() {
//   return {
//     name: '',
//     coins: 100,
//     moves: [],
//   }
// }

function addMove(contact, amount) {
  if (loggedInUser.coins - amount < 0) {
    alert('You cant do that')
    return
  }

  loggedInUser.coins -= amount
  let sentAt = new Date().toLocaleTimeString()
  loggedInUser.moves.unshift({ to: contact, amount, sentAt })
  storageService.store(USER_KEY, loggedInUser)
}

function signUp(name) {
  // let user = getEmptyUser()
  // user.name = name
  let user = { name, coins: 100, moves: [] }
  loggedInUser = user
  storageService.store(USER_KEY, loggedInUser)
}
