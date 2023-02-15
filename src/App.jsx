const productos = [
  {
      "id": 0,
      "nombre": "Macbook Air 13 Chip M1 256gb",
      "imagen": "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
      "precio": "$ 1499.00"
  },
  {
      "id": 1,
      "nombre": "Amazon Echo Dot (4a Gen.)",
      "imagen": "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
      "precio": "$ 14.99"
  },
  {
      "id": 2,
      "nombre": "Cámara IP Inalámbrica 360°",
      "imagen": "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
      "precio": "$ 39.00"
  },
  {
      "id": 3,
      "nombre": "CERRADURA DIGITAL INTELIGENTE FORTEZZA ZIGBEE",
      "imagen": "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
      "precio": "$ 99.00"
  }
]

function App() {
  return (
    <div>
      <h1>Productos</h1>

      <ul>
        <li>
          <h2>{productos[0].nombre}</h2>
          <img src={productos[0].imagen} />
          <h3>{productos[0].precio}</h3>
        </li>

        <li>
          <h2>{productos[1].nombre}</h2>
          <img src={productos[1].imagen} />
          <h3>{productos[1].precio}</h3>
        </li>

        <li>
          <h2>{productos[2].nombre}</h2>
          <img src={productos[2].imagen} />
          <h3>{productos[2].precio}</h3>
        </li>
      </ul>
    </div>
  );
}

export default App;
