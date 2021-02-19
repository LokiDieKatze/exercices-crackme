// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'ilovenaska42!'

const crackme8 = (password) => {
  let tmp1 = password.split('').slice(-3, -1).join('')
  if (Number(tmp1) === 42) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}
crackme8(password)

/*on prend le code à l'envers
tmp1 doit être égale à 42
split et join s'annulent
on sait qu'on slice l'avant dernière lettre et l'avant avant dernière lettre pour avoir tmp1
donc on sait que cest deux lettres doivent être 4 et 2
on fait ce qu'on veut pour le reste car il n'y a pas d'autres indication
*/