import { NavLink } from 'react-router'
import style from './navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.list}>
        <li className={style.list_item}>
          <NavLink to="/">
            Generar guia
          </NavLink>
        </li>
        <li className={style.list_item}>
          <NavLink to="/guides">
            Guias
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}