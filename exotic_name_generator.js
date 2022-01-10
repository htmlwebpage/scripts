const config = {
  lengths: [3, 4, 5, 6, 7, 8, 9, 10],
  vowels: ['a', 'e', 'i', 'o', 'u'],
  consonants: ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
}

function randIndex(arr) {
  return Math.floor(Math.random() * arr.length)
}

function randValue(arr) {
  return arr[randIndex(arr)]
}

function generateNames(count) {
  let names = []

  for (let i=0; i < count; i++) {
    let length = randValue(config.lengths)
    let name = ''

    for (let ii=0; ii < length; ii++) {
      name += Math.round(Math.random()) ? randValue(config.vowels) : randValue(config.consonants)
    }

    names.push(name)
  }
  
  return names
}

console.log(generateNames(25).join('\n'))

/*
ebisiujnii
atumm
uhefgaa
unkiuub
owuyp
xoe
eiy
uszo
uulopee
veyiui
odipe
ichuyakeei
eosatuivao
uurcaee
eins
sedaanr
qeigit
yeeyo
iuuiuxudn
kox
aeqetztoei
dcibbtueiu
sjsa
bukaziaa
atcnu
*/
