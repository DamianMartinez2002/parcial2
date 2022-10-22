export { Linked, Node }
import Node from './node.js'
function Linked(n) {//node
  this.head = n//node
  this.tail = n//node
  this.size = 1

  this.getHead = getHead
  this.prepend = prepend
  this.append = append
  this.traverse = traverse
  this.contains = contains
  this.getTail = getTail
  this.InsertAfter = InsertAfter
  this.InsertBefore = InsertBefore
}


function getHead() {
  return this.head
}
function prepend(n) {//new node
  n.next = this.head
  this.head = n
  this.size++
}

function append(n) {//new node
  n.next = null//
  this.tail.next = n
  this.tail = n
  this.size++
}

function traverse() {
  let c = this.head
  while (c) {//exists
    //console.log(c.key)
    console.log(c.data)
    c = c.next
  }
  console.log('\n')
}

//
// exercises
//
function contains(v) {
  let c = this.head
  let dentro = false
  while (c) {//exists
    if (v === c.data) {
      dentro = c.data
    }
    c = c.next
  }
  console.log(dentro)
}
function getTail() {
  let c = this.head
  var tail = ""
  while (c) {
    tail = c.data
    c = c.next
  }
  console.log(tail)
}
//Metodos nuevos
function InsertAfter(v, insert) {
  let c = this.head
  let ruta = "";
  while (c) {//exists
    if (v == c.data) {
      ruta = c.next
      c.next = insert
      insert.next = ruta
    }
    c = c.next
  }
}
function InsertBefore(v, insert) {
  let c = this.head
  let previo, ruta
  if (c.next == null) {
    this.prepend(insert)
  } else {
    if (v != this.head.data) {
      while (c) {//exists
        if (v != c.data) {
          previo = c
        } else {
          ruta = previo.next
          previo.next = insert
          insert.next = ruta
        }
        c = c.next
      }
    } else {
      this.prepend(insert)
    }
  }
}