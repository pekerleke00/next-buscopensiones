import React from 'react'

import styles from './styles/prefooter.module.scss';

export const PreFooter = () => {
    return (
        <div className={styles.container}>
            <div>
                <h3>Sobre el proyecto</h3>
                <p>BuscoPensiones.com nace con el fin de resolver la problematica de encontrar lugar donde transitar los estudios en las distintas universidades de argentina. Para esto nosotros, que tambien somos estudiantes, creamos esta pagina para hacer mas facil la busqueda de pensiones, residencias u otros tipos de alberges universitarios concentrandolos en un solo lugar.</p>
            </div>
            <div>
                <h3>Sobre las publicaciones</h3>
                <p>{`Las pensiones que se encuentran cargadas en esta pagina NO son propiedad de BuscoPensiones.com, ni se recibe dinero de ningun tipo de parte de las mismas por su publicacion.\n
                    Si te interesa colaborar para que este proyecto sigua en pie podes hacerlo simplemete dejando like y recomendando la pagina a cualquier persona que creas que la pueda nesesitar.`}</p>
            </div>
        </div>
    )
}
