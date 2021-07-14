import React from 'react'

const Asincronismo = () => {
    //Promesas
    // const validacion = true

    // const promesaValidacion = () => {
        
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (validacion) {
    //                 resolve({ok: true,
    //                     mensaje: 'Datos descargados'})
                        
    //             } else {
    //                 reject({
    //                     ok: false,
    //                     mensaje: 'Error de autenticación'
    //                 })
    //             }
    //         }, 2000)
    //     })
    // }

    // promesaValidacion()
    //     .then((respuesta) => console.log(respuesta))
    // .catch((error)=> console.log(error))


    //Fetch
    // fetch('https://www.superheroapi.com/api.php/10220302563893806/search/superman ')
    //     .then((response) => response.json())
    //     .then(({ results }) => console.log(results))
    
    //Async await 
    const getHeroe = async () => {
       const resp = await fetch('https://www.superheroapi.com/api.php/10220302563893806/search/superman ')
        const data = await resp.json()
        console.log(data.results)
    }

    getHeroe()

    return (
        <div>
            <h1>Asincronismo en Javascript</h1>
        </div>
    )
}

export default Asincronismo
