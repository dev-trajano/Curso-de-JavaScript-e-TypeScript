function umNumero(x) {
  if (typeof x !== 'number') return x
  if (x % 3 === 0 && x % 5 === 0) return 'fizzBuzz'
  if (x % 3 === 0) return 'Fizz'
  if (x % 5 === 0) return 'Buzz'
  return x
}
console.log(umNumero('oibb'))

for (let i = 0; i < 100; i++) console.log(i, umNumero(i))
