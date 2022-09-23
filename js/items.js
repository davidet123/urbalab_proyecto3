let itemArray = [
  {
    id: "item01",
    nombre: "Soy el item01",
    cargo: "Secretario",
    precio: "3000"
  },
  {
    id: "item02",
    nombre: "Soy el item02",
    cargo: "Presidente",
    precio: "4000"
  },
]



class Item  {
  constructor (nombre, cargo, precio) {
    this.nombre = nombre;
    this.cargo = cargo;
    this.precio = precio
    this.img = "img/item.png"
  }
}

let item1 = new Item("TEST1", "cargo1", 300);
let item2 = new Item("TEST2", "cargo2", 500);
