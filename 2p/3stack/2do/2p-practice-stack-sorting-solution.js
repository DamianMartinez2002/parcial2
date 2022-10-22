function stack(top) {
  this.data = []
  this.top = top
  this.push = push
  this.pop = pop
  this.full = full
  this.empty = empty
  this.show = show
  this.peek = peek
  function push(element) {
    if (this.full() == true)
      console.log("full stack")
    else
      this.data.unshift(element)
  }
  function pop() {
    if (this.empty() == true)
      console.log("empty stack")
    else
      return this.data.shift()
  }
  function full() {
    if (this.data.length === this.top)
      return true
    else
      return false
  }
  function empty() {
    if (this.data.length === 0)
      return true
    else
      return false
  }
  function show() {
    let show = ""
    for (let i = 0; i < this.data.length; ++i) {
      show += this.data[i] + "\n"
    }
    return show
  }
  function peek() {
    return this.data[0]
  }
}
var cuenta_pasos = [0, 0, 0, 0, 0, 0]
var cuenta_tiempo = [0, 0, 0, 0, 0, 0]
function sort_stack(x) {
  for (let veces = 0; veces < 5; veces++) {
    var start = Date.now()

    let s = new stack(x);
    let p = new stack(x);
    let i = 1;
    let k, j

    k = Math.floor(Math.random() * (x - 1) + 1)

    s.push(k)

    while (i < x) {
      while (p.empty() != true) {
        s.push(p.pop())
        cuenta_pasos[veces] = cuenta_pasos[veces] + 1
      }
      j = Math.floor(Math.random() * (x - 1) + 1)
      while (j <= s.peek() && s.empty() != true) {
        p.push(s.pop())
        cuenta_pasos[veces] = cuenta_pasos[veces] + 1
      }
      if (j >= s.peek() || s.empty()) {
        s.push(j)
        cuenta_pasos[veces] = cuenta_pasos[veces] + 1
      }
      i++
    }
    while (!p.empty()) {
      s.push(p.pop())
    }
    console.log(s.show())

    console.log("pasos: " + cuenta_pasos[veces])
    var end = Date.now()

    cuenta_tiempo[veces] = end - start

    console.log("tiempo: " + cuenta_tiempo[veces] + "s")
  }
}
var total_pasos, total_tiempo, prom_pasos, prom_tiempo
sort_stack(10)
total_pasos = cuenta_pasos[0] + cuenta_pasos[1] + cuenta_pasos[2] + cuenta_pasos[3] + cuenta_pasos[4]
prom_pasos = total_pasos / 5
console.log("Pasos totales: " + total_pasos)
console.log("Pasos promedio: " + prom_pasos)
total_tiempo = cuenta_tiempo[0] + cuenta_tiempo[1] + cuenta_tiempo[2] + cuenta_tiempo[3] + cuenta_tiempo[4]
prom_tiempo = total_tiempo / 5
console.log("Tiempo total: " + total_tiempo)
console.log("Tiempo promedio: " + prom_tiempo)
sort_stack(100)
total_pasos = cuenta_pasos[0] + cuenta_pasos[1] + cuenta_pasos[2] + cuenta_pasos[3] + cuenta_pasos[4]
prom_pasos = total_pasos / 5
console.log("Pasos totales: " + total_pasos)
console.log("Pasos promedio: " + prom_pasos)
total_tiempo = cuenta_tiempo[0] + cuenta_tiempo[1] + cuenta_tiempo[2] + cuenta_tiempo[3] + cuenta_tiempo[4]
prom_tiempo = total_tiempo / 5
console.log("Tiempo total: " + total_tiempo)
console.log("Tiempo promedio: " + prom_tiempo)
sort_stack(1000)
total_pasos = cuenta_pasos[0] + cuenta_pasos[1] + cuenta_pasos[2] + cuenta_pasos[3] + cuenta_pasos[4]
prom_pasos = total_pasos / 5
console.log("Pasos totales: " + total_pasos)
console.log("Pasos promedio: " + prom_pasos)
total_tiempo = cuenta_tiempo[0] + cuenta_tiempo[1] + cuenta_tiempo[2] + cuenta_tiempo[3] + cuenta_tiempo[4]
prom_tiempo = total_tiempo / 5
console.log("Tiempo total: " + total_tiempo)
console.log("Tiempo promedio: " + prom_tiempo)