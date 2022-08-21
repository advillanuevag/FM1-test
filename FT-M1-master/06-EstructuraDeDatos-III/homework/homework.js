"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos 
 recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe 
  dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) 
  en cualquiera de sus variantes, según se indique por parámetro ("post-order", 
  "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el 
  recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first 
  (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la 
  imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) { //Si es menor lo insertamos a la izquierda del arbol.
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  } else {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) {
    return true;
  }
  if (value < this.value) {
    if (this.left ?.contains(value)) {
      return true;
    }
  } else {
    if (this.right) {
      if (this.right.contains(value)) {
        return true;
      }
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, option) {
  switch (option) {
    case "pre-order": {
      cb(this.value);
      if (this.left) {
        this.left.depthFirstForEach(cb, option);
      }
      if (this.right) {
        this.right.depthFirstForEach(cb, option);
      }
      break;
    }
    case "post-order": {
      if (this.left) {
        this.left.depthFirstForEach(cb, option);
      }
      if (this.right) {
        this.right.depthFirstForEach(cb, option);
      }
      cb(this.value);
      break;
    }
    default: {
      if (this.left) {
        this.left.depthFirstForEach(cb, option);
      }
      cb(this.value);

      if (this.right) {
        this.right.depthFirstForEach(cb, option);
      }
      break;
    }
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, listaDeEspera = []) {
  cb(this.value);
  if (this.left) listaDeEspera.push(this.left)
  if (this.right) listaDeEspera.push(this.right)
  const node = listaDeEspera.shift();
  if (node) node.breadthFirstForEach(cb, listaDeEspera);
};

BinarySearchTree.prototype.size = function (value) {
  let resultado = 1;
  if (this.left) {
    resultado += this.left.size();
  }
  if (this.right) {
    resultado += this.right.size();
  }
  return resultado;
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};