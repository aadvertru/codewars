const someString = "No offense but,\nYour writing is among the worst I've ever read"
const vowels = ['a', 'i', 'e', 'u', 'o', 'y', 'A', 'I', 'E', 'U', 'Y', 'O']

function disemvowel(str) {
  str = str.split('').filter(item => vowels.indexOf(item) < 0).join('')
   
    console.log(str)
    //return str;
  }

disemvowel(someString)