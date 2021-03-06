// Use case 6
// use dynamically changing config

import { create, all } from '..'

console.log('\nuse case 6')

const mathjs = create(all)
console.log(mathjs.divide(mathjs.sin(mathjs.divide(mathjs.pi, 2)), 3))
// sin(pi / 2) / 3 =
// number 0.3333333333333333

mathjs.config({ number: 'BigNumber' })
console.log(mathjs.divide(mathjs.sin(mathjs.divide(mathjs.pi, 2)), 3).toString())
// sin(pi / 2) / 3 =
// BigNumber 0.3333333333333333333333333333333333333333333333333333333333333333
