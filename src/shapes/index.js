import { string, number, arrayOf, shape, oneOfType, object, bool } from 'prop-types'

export const ProyectoShape = shape({
    id: number.isRequired,
    titulo: string.isRequired,
    descripcion: string.isRequired,
    url: string.isRequired,
    tecnologia: string.isRequired,
    favorito: bool.isRequired,
    fecha_creacion: string.isRequired,
    imagenes: arrayOf(string).isRequired
})

export const NavItemShape = shape({
    item: oneOfType([string, object]).isRequired,
    logo: bool,
    path: string,
    dropdown: bool,
    categories: arrayOf(string)
})