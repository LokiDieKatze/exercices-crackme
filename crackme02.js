// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'q'

const crackme2 = (password) => {
  if (password.length === 1) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme2(password)

// il suffit que le mdp contienne 1 caractère, quel qu'il soit