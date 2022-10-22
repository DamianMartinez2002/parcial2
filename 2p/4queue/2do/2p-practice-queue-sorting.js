function queue(top) {
  this.data = []
  this.top = top
  this.enqueue = enqueue
  this.dequeue = dequeue
  this.full = full
  this.empty = empty
  this.show = show
  this.peek = peek
  function enqueue(element) {
    if (this.full() == true)
      console.log("full queue")
    else
      this.data.push(element)
  }

  function dequeue() {
    if (this.empty() == true)
      console.log("empty queue")
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
function sort_queue(v) {
  for (let veces = 0; veces < 5; veces++) {
    var start = Date.now()
    let c = new queue()
    let q = new queue()

    let i = 1, n, r;
    n = Math.floor(Math.random() * (v - 1) + 1)
    c.enqueue(n)

    while (i < v) {
      r = Math.floor(Math.random() * (v - 1) + 1)
      while (c.empty() != true) {
        q.enqueue(c.dequeue())
        cuenta_pasos[veces]++
      }
      while (r > q.peek()) {
        c.enqueue(q.dequeue())
        cuenta_pasos[veces]++
      }
      if (q.empty() == true) {
        c.enqueue(r)
        cuenta_pasos[veces]++
      }
      if (r <= q.peek()) {
        c.enqueue(r)
        cuenta_pasos[veces]++
      }
      while (q.empty() != true) {
        c.enqueue(q.dequeue())
      }
      i++
    }
    console.log(c.show())
    console.log("pasos: " + cuenta_pasos[veces])
    var end = Date.now()
    cuenta_tiempo[veces] = end - start
    console.log("tiempo: " + cuenta_tiempo[veces])
  }
}
var total_pasos, total_tiempo, prom_pasos, prom_tiempo
sort_queue(10)
total_pasos = cuenta_pasos[0] + cuenta_pasos[1] + cuenta_pasos[2] + cuenta_pasos[3] + cuenta_pasos[4]
prom_pasos = total_pasos / 5
console.log("Pasos totales: " + total_pasos)
console.log("Pasos promedio: " + prom_pasos)
total_tiempo = cuenta_tiempo[0] + cuenta_tiempo[1] + cuenta_tiempo[2] + cuenta_tiempo[3] + cuenta_tiempo[4]
prom_tiempo = total_tiempo / 5
console.log("Tiempo total: " + total_tiempo)
console.log("Tiempo promedio: " + prom_tiempo)
sort_queue(100)
total_pasos = cuenta_pasos[0] + cuenta_pasos[1] + cuenta_pasos[2] + cuenta_pasos[3] + cuenta_pasos[4]
prom_pasos = total_pasos / 5
console.log("Pasos totales: " + total_pasos)
console.log("Pasos promedio: " + prom_pasos)
total_tiempo = cuenta_tiempo[0] + cuenta_tiempo[1] + cuenta_tiempo[2] + cuenta_tiempo[3] + cuenta_tiempo[4]
prom_tiempo = total_tiempo / 5
console.log("Tiempo total: " + total_tiempo)
console.log("Tiempo promedio: " + prom_tiempo)
sort_queue(1000)
total_pasos = cuenta_pasos[0] + cuenta_pasos[1] + cuenta_pasos[2] + cuenta_pasos[3] + cuenta_pasos[4]
prom_pasos = total_pasos / 5
console.log("Pasos totales: " + total_pasos)
console.log("Pasos promedio: " + prom_pasos)
total_tiempo = cuenta_tiempo[0] + cuenta_tiempo[1] + cuenta_tiempo[2] + cuenta_tiempo[3] + cuenta_tiempo[4]
prom_tiempo = total_tiempo / 5
console.log("Tiempo total: " + total_tiempo)
console.log("Tiempo promedio: " + prom_tiempo)