import React from 'react'

const ListaPeliculas = ({peliculas}) => {
    return (
        <ul>
                        {peliculas.map(pelicula => {
                            return <li key={pelicula.id}> {pelicula.title} - { pelicula.year}</li>
                      } )}
                        
                    </ul>
    )
}

export default ListaPeliculas
