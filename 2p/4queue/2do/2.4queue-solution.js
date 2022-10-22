function queue() {
  this.data = []
  this.top = 5
  this.enqueue = enqueue
  this.dequeue = dequeue
  this.full = full
  this.empty = empty
  this.show = show
}
function enqueue(x) {
  if (this.full() == true)
    console.log("No puedes meter a la fila")
  else
    this.data.push(x)
}
function dequeue() {
  if (this.empty() != true)
    this.data.shift()
  else
    console.log("No tienes nada en la fila")
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

let cola = new queue()

cola.enqueue("hola")
cola.enqueue("a")
cola.enqueue("todos")
cola.enqueue("mis")
cola.enqueue("amigos")
console.log(cola.show())
cola.enqueue("youtube")
cola.dequeue()
cola.dequeue()
cola.dequeue()
cola.dequeue()
cola.dequeue()
cola.dequeue()