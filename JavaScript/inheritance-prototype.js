const c = { prop: 2}
console.log(c.prop)

b = Object.create(c)
console.log(b.prop)
console.log(b)
