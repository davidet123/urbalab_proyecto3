/* 
const itemArray = [
  {
    id: "itemCompra1",
    nombre: "Pepet",
    cargo: "Secretario",
    precio: 3000,
    disponible: true
  },
  {
    id: "itemCompra2",
    nombre: "Antonio",
    cargo: "Presidente",
    precio: 4000,
    disponible: true
  },
  {
    id: "itemCompra3",
    nombre: "Jorge",
    cargo: "Secretario",
    precio: 3000,
    disponible: true
  },
  {
    id: "itemCompra4",
    nombre: "Soy el item02",
    cargo: "Presidente",
    precio: 4000,
    disponible: true
  },
  {
    id: "itemCompra5",
    nombre: "Soy el item01",
    cargo: "Secretario",
    precio: 3000,
    disponible: true
  },
  {
    id: "itemCompra6",
    nombre: "Soy el item02",
    cargo: "Presidente",
    precio: 4000,
    disponible: true
  },
  {
    id: "itemCompra7",
    nombre: "Soy el item01",
    cargo: "Secretario",
    precio: 3000,
    disponible: true
  },
  {
    id: "itemCompra8",
    nombre: "Soy el item02",
    cargo: "Presidente",
    precio: 4000,
    disponible: true
  },
  {
    id: "itemCompra9",
    nombre: "Soy el item01",
    cargo: "Secretario",
    precio: 3000,
    disponible: true
  },
  {
    id: "itemCompra10",
    nombre: "Soy el item02",
    cargo: "Presidente",
    precio: 4000,
    disponible: true
  },
  {
    id: "itemCompra11",
    nombre: "Soy el item02",
    cargo: "Presidente",
    precio: 4000,
    disponible: true
  },
  {
    id: "itemCompra12",
    nombre: "Soy el item02",
    cargo: "Presidente",
    precio: 4000,
    disponible: true
  }
] */

const url = " https://represent.opennorth.ca/representatives/?limit=15"
// const url = "https://www.donneesquebec.ca/recherche/dataset/8fe69713-fade-4751-a0b4-7e57a81886b1/resource/8d9e3590-c4a6-4c16-8a7b-e78d06955f28/download/liste-elus.json"

/* const fetchItems = () => {
  loading = true;
  fetch(url)
  .then(res => res.json())
  .then(data => {

    // Mapear array


    cargarAplicacion(data);
  })
  .catch(err => {
    console.log(err)
  })
}; */

/* async function fetchItems () {
  try {
    let res = await fetch(url)
    let data = await(res.json())
    cargarAplicacion(data);

  } catch (e) {

    console.log(e)
  }
} */
/* let datosArray = JSON.parse(localStorage.getItem("itemArray"))
let itemArray = datosArray ? [...datosArray] : []; */


const fetchItems = async () => {
    let res = await fetch(url)
    let data = await(res.json())
    itemArray = data.objects
    .sort((a, b) => 0.5 - Math.random())
    .map((item, index )=> {
      let precio = Math.floor(Math.random() * (10000 - 3000 + 1) + 3000)
      return ({
        id: "itemCompra"+index,
        nombre: item.name,
        cargo: item.elected_office,
        precio,
        disponible: true
      })
    });   
    localStorage.setItem("itemArray", JSON.stringify(itemArray));

  cargarAplicacion();
}




