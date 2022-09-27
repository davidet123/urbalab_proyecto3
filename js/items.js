
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
]

const url = " https://represent.opennorth.ca/representatives/?limit=15"
// const url = "https://www.donneesquebec.ca/recherche/dataset/8fe69713-fade-4751-a0b4-7e57a81886b1/resource/8d9e3590-c4a6-4c16-8a7b-e78d06955f28/download/liste-elus.json"

const fetchItems = async () => {
  loading = true;
  // console.log("antes")
  fetch(url)
  .then(res => res.json())
  .then(data => {
    cargarAplicacion(data);
    // console.log(data.objects)
    /* cargarAplicacion(); */
    // console.log("durante")
  })
  // console.log("despues")
};

/* async function fetchItems () {
  try {
    let res = await fetch(url)
    let data = await(res.json())
    return data;

  } catch (e) {
    console.log(e)
  }
} */

/* const fetchItems = async () => {
  let res = await fetch(url)
  let data = await(res.json())
  console.log(data)
  return data
} */



/* let loading = async () => await fetchItems(); */

