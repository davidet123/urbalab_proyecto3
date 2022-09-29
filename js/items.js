// URL
const url = " https://represent.opennorth.ca/representatives/?limit=15"


// Carga de datos

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




