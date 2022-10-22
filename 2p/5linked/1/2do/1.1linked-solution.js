import { Linked, Node } from '../../../../dam/linked/node5es.js'

let n1 = new Node(1)
let n2 = new Node(2)

let l = new Linked(n1)
l.prepend(n2)
l.append(new Node(3))
l.prepend(new Node(4))
l.traverse(l.getHead())

l.contains(2)
l.contains(7)

l.getTail()