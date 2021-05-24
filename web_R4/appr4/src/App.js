import React, { Fragment, useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Tabla from './components/Tabla'
import Footer from './components/Footer'


function App() {

  // estado inicial del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
  })

  const { ciudad } = busqueda;

  // estado para condicionar para evitar el loop infinito de useEffect
  const [consultar, guardarConsultar] = useState(false);
  // estado para guardar el resultado de la api
  const [resultado, guardarResultado] = useState({})
  // estado para la visualizacion de los paises
  const [verListado, guardarVerListado] = useState(false)



  useEffect(() => {

    const consultaApi = async () => {

      if (consultar) {
        const apiKey = '454a6b163fa9c66252deafea469854e5';
        const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${ciudad}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarResultado(resultado.location)
        guardarConsultar(false)
      }
    }

    consultaApi();

    // Resetear el formulario
    guardarBusqueda({
      ciudad: '',
    })

  }, [consultar])


  return (
    <Fragment>

      <div className="container">
        <div className="d-flex justify-content-center py-3">
          <Header
            titulo="Aplicacion Ciudades"
          />
        </div>

        <Formulario
          busqueda={busqueda}
          guardarBusqueda={guardarBusqueda}
          guardarConsultar={guardarConsultar}        
          guardarVerListado={guardarVerListado}
        />

        {verListado
          ?
          <Tabla
            resultado={resultado}
          />
          :
          null
        }
      </div>

      <Footer />
      
    </Fragment>
  )
}

export default App
