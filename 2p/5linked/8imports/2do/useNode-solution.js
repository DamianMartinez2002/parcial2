import { Linked, Node } from '../../../../dam/linked/node5es.js'

let n1 = new Node(1)
let n2 = new Node(2)

let l = new Linked(n1)
l.append(n2)
l.append(new Node(4))
l.traverse(l.getHead())

l.InsertAfter(4, new Node(5))
l.traverse(l.getHead())
l.InsertBefore(4, new Node(3))
l.traverse(l.getHead())