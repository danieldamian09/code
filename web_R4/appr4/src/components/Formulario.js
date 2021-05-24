import React, { useState, Fragment } from 'react';


function Formulario({ busqueda, guardarBusqueda, guardarConsultar, guardarVerListado }) {

    // estado del error
    const [error, guardarError] = useState(false);

    // extraer ciudad 
    const { ciudad } = busqueda;

    // funcion para colocar los elementos en el state del formulario
    const guardarEstado = e => {
        // actualizar el estado
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }


    // guardas los datos al realizar submit
    const guardarDatos = e => {
        e.preventDefault();

        // validacion
        if (ciudad.trim() === '') {
            guardarError(true);
            return;
        }else{
            guardarError(false);
            guardarConsultar(true)
            guardarVerListado(true)
        }
    }


    return (

        <Fragment>
            <form
                onSubmit={guardarDatos}
            >
                {error
                    ?
                    <div className="alert alert-danger" role="alert">
                        Todos los Campos son Obligatorios
                </div>
                    :
                    null
                }

                <div className="form-row py-3">
                    <div className="col-lg-8 d-flex col-sm-12 py-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ciudad"
                            name="ciudad"
                            id="ciudad"
                            value={ciudad}
                            onChange={guardarEstado}
                        />
                    </div>
                    <div className="col-lg-4 d-flex col-sm-12 py-2">
                        <button type="submit" className="btn btn-primary btn-md btn-block">Agregar</button>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default Formulario;
