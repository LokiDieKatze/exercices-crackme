// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'JustASimplePassword'

const crackme9 = (password) => {
  if (password.startsWith('Just') && password.endsWith('Password')) {
    let tmp1 = password.slice(4).slice(0, -8)
    tmp1 = tmp1.split('').reverse().join('')
    if (Number.isNaN(Number(tmp1))) {
      tmp1 += String.fromCharCode(35)
      if (tmp1 === 'e' + 'l' + 'p' + 'm' + 'iSA#') {
        console.log('OK')
      } else {
        console.log('BAD')
      }
    } else {
      console.log('BAD')
    }
  } else {
    console.log('BAD')
  }
}
crackme9(password)

/*Prendre le code à l'envers:
tmp1 final : elpmiSA#
tmp1 - String.fromCharCode(35) : elpmiSA - effectivement pas un nombre
tmp1 en reverse : ASimple
Puisque on sait que le password de base commence par Just et finit par Password
et que les 4 premières lettres sont retirées donc Just ainsi que les 8 dernières avec un indice inversé donc Password
on comprend que ASimple se trouve entre Just et Password
*/