import React from 'react';


function Tabla({ resultado }) {

    if(!resultado) return null;

    const {name, country, region, localtime, lat, lon} = resultado;

    return (
        <div>
            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Pais</th>
                        <th scope="col">Region</th>
                        <th scope="col">Hora Local</th>
                        <th scope="col">Latitud</th>
                        <th scope="col">Longitud</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{name}</th>
                        <td>{country}</td>
                        <td>{region}</td>
                        <td>{localtime}</td>
                        <td>{lat}</td>
                        <td>{lon}</td>
                        <td>☑️</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Tabla
